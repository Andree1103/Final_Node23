"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productsInCarts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productsInCarts.belongsTo(models.products, { foreignKey: "productId" });
      productsInCarts.belongsTo(models.cars, { foreignKey: "carId" });
    }
  }
  productsInCarts.init(
    {
      carId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "productsInCarts",
    }
  );
  return productsInCarts;
};
