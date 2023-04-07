const express = require("express");
const userController = require("../controllers/userController");
const Router = express.Router();


Router.get("/test", userController.allAccess);
Router.get("/userDetails", userController.getUser);

module.exports = Router;
