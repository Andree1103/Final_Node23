const { products, users } = require("../models");
const { Op } = require("sequelize");

class ProductService {
  static async create(newproduct) {
    try {
      const result = await products.create(newproduct);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = await products.findAll({
        where: {
          availableQty: {
            [Op.gte]: 1,
          },
        },
        include: {
          model: users,
          attributes: ["id", "username"],
        },
        attributes: [
          "id",
          "name",
          "description",
          "price",
          "availableQty",
          "productImage",
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, description) {
    try {
      const result = await products.update(description, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
