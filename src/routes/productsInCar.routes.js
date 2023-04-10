const { Router } = require("express");
const {
  createProductinCar,
  getProductWithUser,
  sellCar,
} = require("../controllers/productInCar.controller");

const router = Router();

router.post("/productsInCart", createProductinCar);
router.get("/cards/:cardId/products", getProductWithUser);
router.post("/sellCar/Order", sellCar);

module.exports = router;
