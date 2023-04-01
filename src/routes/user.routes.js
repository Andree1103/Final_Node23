const { Router } = require("express");
const { createUser } = require("../controllers/user.controller");
const { updateUser } = require("../controllers/user.controller");
const {
  createUserValidator,
  updateUserValidator,
} = require("../validators/user.validator");

const router = Router();

router.post("/users", createUserValidator, createUser);

router.put("/users/:id", updateUserValidator, updateUser);

module.exports = router;
