const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
const AppError = require("../utils/appError");

checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const { email, username } = req.body;

  const user = await User.findOne({
    where: {
      username: username,
    },
  });

  if (user) {
    res.status(400).json({
      status: "Fail",
      message: "Username is already in use!",
    });
    return;
  }

  // Email
  const userEmail = await User.findOne({
    where: {
      email: email,
    },
  });
  if (userEmail) {
    res.status(400).json({
      status: "Fail",
      message: "Failed! Email is already in use!",
    });
    return;
  }

  next();
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i],
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignUp;
