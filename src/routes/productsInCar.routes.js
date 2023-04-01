const { Router } = require("express");
const {
  createProductinCar,
} = require("../controllers/productInCar.controller");

const router = Router();

router.post("/productsInCart", createProductinCar);

module.exports = router;
