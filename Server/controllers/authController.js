const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const crypto = require("crypto");
const AppError = require("../utils/appError");
const Op = db.Sequelize.Op;
const sendEmail = require("../utils/email");
const {
  authSchema, 
  authSchemaSignIn,
  authSchemaResetPassword,
  updatePasswordValid,
} = require("../helpers/validationSchema");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//for creating token function
const signToken = (id) => {
  return jwt.sign({ id }, config.secret, {
    expiresIn: 86400, // 24 hours
  });
};

exports.signup = async (req, res, next) => {
  // Save User to Database
  try {
    await authSchema.validateAsync(req.body);
    const { username, email, password, roles } = req.body;
    const token = jwt.sign({ email: email }, config.secret, {
      expiresIn: 86400, // 24 hours
    });
    const user = await User.create({
      username: username,
      email: email,
      password: bcrypt.hashSync(password, 8),
      confirmationCode: token,
    });

    // 3) Send it to user's email
    const verificationURL = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/auth/confirm/${token}`;
    const message = `Welcome ${username} Please Click on the link to verify your email.<br> <a href="${verificationURL}">Click here to verify</a>`;

    if (roles) {
      const roles = await Role.findAll({
        where: {
          name: {
            [Op.or]: roles,
          },
        },
      });
      await user.setRoles(roles);
    } else {
      // user role = 1
      await user.setRoles([1]);
    }

    try {
      await sendEmail({
        email: email,
        subject: "Your Verification Link (valid for 10 min)",
        message,
      });
      res.status(200).json({
        status: "success",
        message: "Verification Link sent to email!",
      });
    } catch (err) {
      return next(
        new AppError(
          "There was an error sending the email. Try again later!",
          500
        )
      );
    }
  } catch (err) {
    if (err.isJoi === true) {
      return res.status(422).json({
        status: "Fail",
        message: err.details,
      });
    }

    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.signin = async (req, res, next) => {
  try {
    await authSchemaSignIn.validateAsync(req.body);
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res
        .status(401)
        .json({ status: "Fail", message: "Invalid Email or Password!" });
    }

    var passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({
        status: "Fail",
        message: "Invalid Email or Password!",
      });
    }

    if (user.active != "Active") {
      return res.status(401).send({
        message: "Pending Account. Please Verify Your Email!",
      });
    }

    var token = signToken(user.id);

    var authorities = [];
    const roles = await user.getRoles();
    for (let i = 0; i < roles.length; i++) {
      authorities.push("ROLE_" + roles[i].name.toUpperCase());
    }

    const baseUrl = `${req.protocol}://${req.get("host")}/images/uploads/`;

    res.status(200).json({
      status: "Success",
      data: {
        id: user.id,
        username: user.username,
        email: user.email,
        roles: authorities,
        profile_Image_Url: baseUrl + user.profile_url,
        accessToken: token,
      },
    });
  } catch (err) {
    if (err.isJoi === true) {
      return res.status(422).json({
        status: "Fail",
        message: err.details,
      });
    } else
      res.status(500).json({
        status: "Fail",
        message: err,
      });
  }
};

exports.forgetPassword = async (req, res, next) => {
  //Step#01  Find User A/C through Email
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) {
    return next(new AppError("There is no User With That Email!", 404));
  }

  //Step#02 Create Random Token
  const resetToken = crypto.randomBytes(32).toString("hex");
  user.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  user.passwordResetExpire = Date.now() + 10 * 60 * 1000;
  user.save();

  //Step 03 Email
  // 3) Send it to user's email
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/auth/resetPassword/${resetToken}`;
  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: <br/><a href="${resetURL}">Click Here<a/>.<br/>If you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token (valid for 10 min)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = null;
    user.passwordResetExpires = null;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("There was an error sending the email. Try again later!"),
      500
    );
  }
};
exports.resetPassword = async (req, res, next) => {
  try {
    await authSchemaResetPassword.validateAsync(req.body);
    const { password } = req.body;
    // 1) Get user based on the token
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");
    const status = "Active";
    const user = await User.findOne({
      where: {
        [Op.and]: [
          {
            passwordResetToken: hashedToken,
            passwordResetExpire: { [Op.gt]: Date.now() },
            active: status,
          },
        ],
      },
    });
    // 2) If token has not expired, and there is user, set the new password
    if (!user) {
      return next(
        new AppError("Token is invalid or has expired,Please Try Again", 400)
      );
    }

    user.password = bcrypt.hashSync(password, 8);
    user.passwordResetToken = null;
    user.passwordResetExpire = null;
    await user.save();

    // 3) Update changedPassword At property for the user

    // 4) Log the user in, send JWT
    var token = signToken(user.id);

    res.status(200).json({
      // id: user.id,
      // username: user.username,
      // email: user.email,
      // roles: authorities,
      // accessToken: token,
      status: "Success Changed",
      token,
    });
  } catch (err) {
    if (err.isJoi === true) {
      return res.status(422).json({
        status: "Fail",
        message: err.details,
      });
    } else
      res.status(400).json({
        status: "Fail",
        message: err,
      });
  }
};

//For Verification
exports.verifyUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        confirmationCode: req.params.confirmationCode,
      },
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    user.active = "Active";
    user.save();

    res.status(200).json({
      status: "Success",
      message: "Account Successfully Verified !",
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

//Update Password
exports.resetPassword = async (req, res, next) => {
  try {
    await authSchemaResetPassword.validateAsync(req.body);
    const { password } = req.body;
    // 1) Get user based on the token
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");
    const status = "Active";
    const user = await User.findOne({
      where: {
        [Op.and]: [
          {
            passwordResetToken: hashedToken,
            passwordResetExpire: { [Op.gt]: Date.now() },
            active: status,
          },
        ],
      },
    });
    // 2) If token has not expired, and there is user, set the new password
    if (!user) {
      return next(
        new AppError("Token is invalid or has expired,Please Try Again", 400)
      );
    }

    user.password = bcrypt.hashSync(password, 8);
    user.passwordResetToken = null;
    user.passwordResetExpire = null;
    await user.save();

    // 3) Update changedPassword At property for the user

    // 4) Log the user in, send JWT
    var token = signToken(user.id);

    res.status(200).json({
      // id: user.id,
      // username: user.username,
      // email: user.email,
      // roles: authorities,
      // accessToken: token,
      status: "Success Changed",
      token,
    });
  } catch (err) {
    if (err.isJoi === true) {
      return res.status(422).json({
        status: "Fail",
        message: err.details,
      });
    } else
      res.status(400).json({
        status: "Fail",
        message: err,
      });
  }
};

//For Password Update
exports.updatePassword = async (req, res, next) => {
  try {
    await updatePasswordValid.validateAsync(req.body);
    const { currentPassword, password } = req.body;
    // Find User
    const user = await User.findByPk(req.userId);
    // Compare Password
    console.log(user.password);
    var passwordIsValid = bcrypt.compareSync(currentPassword, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({
        status: "Fail",
        message: "Invalid Email or Password!",
      });
    }

    //Update  Password
    user.password = bcrypt.hashSync(password, 8);
    await user.save();

    // 4) Log the user in, send JWT
    var token = signToken(user.id);

    res.status(200).json({
      status: "Success Changed",
      token,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};
