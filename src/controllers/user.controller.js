const AuthServices = require("../services/auth.service");
const UserService = require("../services/user.service");
const { cars } = require("../models");
const transporter = require("../utils/mailer");

const createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = await UserService.add(userData);
    if (!user) {
      next(error);
    }
    await transporter.sendMail({
      from: "andreechiquis11@gmail.com",
      to: user.email,
      subject: "Verifica tu correo electronico",
      html: `
                <p>Hola ${user.username} Bienvenido al foro</p>
                <p>Es necesario que verifiques tu correo</p>
                `,
    });
    await cars.create({
      userId: user.id,
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
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
