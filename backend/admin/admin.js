const User = require("../models/user");
require("dotenv").config();

//Define admin user
const AdminUser = new User({
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
  admin: true,
});
