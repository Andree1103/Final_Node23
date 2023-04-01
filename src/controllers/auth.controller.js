const bcrypt = require("bcrypt");
const AuthServices = require("../services/auth.service");
const UserService = require("../services/user.service");

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.getUser(email);
    if (!user) {
      return next({
        status: 400,
        message: "Invalid email",
        error: "User not found",
      });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return next({
        status: 400,
        message: "The password doesnt match with email user",
        error: "Invalid pasword",
      });
    }
    const { id, username, role } = user;
    const token = AuthServices.getToken({ id, username, role });
    res.json({
      id,
      username,
      role,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userLogin,
};
