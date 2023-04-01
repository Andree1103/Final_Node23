const { productsInCarts, cars, products } = require("../models");

const createProductinCar = async (req, res, next) => {
  try {
    const { carId, productId, quantity, price } = req.body;
    await productsInCarts.create({
      carId,
      productId,
      quantity,
      price,
    });
    const totalPrice = price * quantity;
    await cars.increment({ totalPrice }, { where: { id: carId } });
    await products.increment(
      { availableQty: -quantity },
      { where: { id: productId } }
    );
    res.json({
      message: "Producto Agregado Correctamente!!",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProductinCar,
};
