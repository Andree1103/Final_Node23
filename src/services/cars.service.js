const { productsInCarts, cars, users } = require("../models");
class CardsService {
  static async productswithUser(cardId) {
    try {
      const result = await productsInCarts.findAll({
        where: {
          carId: cardId,
        },
        attributes: ["productId", "quantity"],
        include: [
          {
            model: cars,
            attributes: ["id"],
            include: {
              model: users,
              attributes: ["username"],
            },
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = CardsService;
