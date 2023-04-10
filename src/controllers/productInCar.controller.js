const {
  productsInCarts,
  cars,
  users,
  orders,
  productsInOrdens,
} = require("../models");
const CardsService = require("../services/cars.service");

const transporter = require("../utils/mailer");

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
    /*await products.increment(
      { availableQty: -productsOrder.quantity },
      { where: { id: productsOrder.id } }
    );*/
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

const sellCar = async (req, res, next) => {
  try {
    const { userId, totalPrice } = req.body;
    const order = await orders.create({ userId, totalPrice });
    const User = await users.findOne({
      where: {
        id: userId,
      },
    });

    const userCar = await cars.findOne({ where: { userId } });
    const Products = await productsInCarts.findAll({
      where: { carId: userCar.id },
    });
    const productsOrder = Products.map((product) => ({
      orderId: order.id,
      productId: product.productId,
      quantity: product.quantity,
      price: product.price,
    }));
    await productsInOrdens.bulkCreate(productsOrder);
    await cars.update({ totalPrice: 0 }, { where: { userId } });
    await productsInCarts.destroy({ where: { carId: userCar.id } });
    await transporter.sendMail({
      from: "andreechiquis11@gmail.com",
      to: User.email,
      subject: "Verifica tu correo electronico",
      html: `
                <p>Hola ${User.username} Compra Realizada</p>
                <p>Tu compra ha sido realizada con exito, gracias por confiar en nosotros</p>
                `,
    });
    res.json({
      message: "Orden Creada y productos vaciados del carrito",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createProductinCar,
  getProductWithUser,
  sellCar,
};
