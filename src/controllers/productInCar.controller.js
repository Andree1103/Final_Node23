const { productsInCarts, cars, products, users } = require("../models");
const CardsService = require("../services/cars.service");

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

const getProductWithUser = async (req, res, next) => {
  try {
    const { cardId } = req.params;
    const produtUser = await CardsService.productswithUser(cardId);
    res.json(produtUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createProductinCar,
  getProductWithUser,
};
