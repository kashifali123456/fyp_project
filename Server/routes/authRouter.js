const express = require('express');
const { verifySignUp,uploadFiles} = require("../middleware");
const controller = require("../controllers/authController");
const uploadController = require("../controllers/uploadController");
const { authJwt} = require("../middleware");
const Router = express.Router();


  Router.post("/signup",[
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );

  Router.post("/signin", controller.signin);
  Router.patch('/resetpassword/:token',controller.resetPassword);
  Router.post("/forgetpassword",controller.forgetPassword);
  Router.get("/confirm/:confirmationCode", controller.verifyUser)

  Router.patch("/updatepassword", [authJwt.verifyToken],controller.updatePassword);

  Router.patch("/upload",[authJwt.verifyToken], uploadFiles.single("image"), uploadController.uploadFiles);
module.exports = Router;