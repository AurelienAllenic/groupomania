const express = require("express");
const router = express.Router();
const login = require("../controllers/users");
const signup = require("../controllers/users");
const deleteMethod = require("../controllers/users");
const auth = require("../middlewares/auth");

module.exports = () => {
  console.log("test de l'export user passé");
  router.use("/auth/login", login.login);
  router.use("/auth/signup", signup.signup);
  router.use("auth/delete/:id", auth, deleteMethod.delete);
  return router;
};
