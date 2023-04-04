const { Router } = require("express");
const {
  createProductinCar,
  getProductWithUser,
} = require("../controllers/productInCar.controller");

const router = Router();

router.post("/productsInCart", createProductinCar);
router.get("/cards/:cardId/products", getProductWithUser);

module.exports = router;
