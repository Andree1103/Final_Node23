const { Router } = require("express");
const { getOrders } = require("../controllers/orders.controller");
const router = Router();

router.get("/orders/:id", getOrders);

module.exports = router;
