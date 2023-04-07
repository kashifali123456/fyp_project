const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const logger = require("morgan");
const globalerrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

//connect dotenv file
dotenv.config({ path: "./config.env" });
global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.use(cors(corsOptions));

app.use("/images", express.static(path.join(__dirname, "resources")));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Add Logger
app.use(logger("combined"));

// database
const db = require("./models");

db.sequelize.sync();
Role = db.role;
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Database with { force: true }");
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Dr.Cotton application." });
});

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

//Error Handler for incorrect path
app.all("*", (req, res, next) => {
  next(new AppError(`Invalid Path! ${req.originalUrl}`, 404));
});

//global error Handler
app.use(globalerrorHandler);

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}

module.exports = app;
