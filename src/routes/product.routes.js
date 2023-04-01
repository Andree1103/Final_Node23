const { Router } = require("express");
const {
  createProduct,
  getAllProducts,
  updateProduct,
} = require("../controllers/product.controller");
const authenticate = require("../middleware/auth.middleware");

const router = Router();

router.post("/products", authenticate, createProduct);
router.get("/products", authenticate, getAllProducts);
router.put("/products/:id", authenticate, updateProduct);

module.exports = router;
