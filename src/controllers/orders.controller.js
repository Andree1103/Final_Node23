const { orders } = require("../models");

const getOrders = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await orders.findAll({
      where: {
        userId: id,
      },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getOrders,
};
