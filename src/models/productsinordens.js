"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productsInOrdens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productsInOrdens.belongsTo(models.products, { foreignKey: "productId" });
      productsInOrdens.belongsTo(models.orders, { foreignKey: "orderId" });
    }
  }
  productsInOrdens.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "productsInOrdens",
    }
  );
  return productsInOrdens;
};
