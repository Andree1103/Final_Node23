const { productsInCarts } = require("../models");

class ProductInCarService {
  static async create(newproduct) {
    try {
      const result = await productsInCarts.create(newproduct);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductInCarService;
