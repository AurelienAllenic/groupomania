const express = require("express");
const router = express.Router();
const login = require("../controllers/users");
const signup = require("../controllers/users");

module.exports = () => {
  console.log("test de l'export user passé");
  router.use("/auth", login.login);
  router.use("/auth", signup.signup);
  return router;
};
