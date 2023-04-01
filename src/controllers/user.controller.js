const AuthServices = require("../services/auth.service");
const UserService = require("../services/user.service");
const { cars } = require("../models");

const createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = await UserService.add(userData);
    if (!user) {
      next(error);
    }
    await cars.create({
      userId: user.id,
    });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, avatar } = req.body;
    await UserService.update(id, { username, avatar });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  updateUser,
};
