"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.belongsTo(models.users, { foreignKey: "userId" });
      products.hasMany(models.productsInCarts, { foreignKey: "productId" });
      products.hasMany(models.productsInOrdens, { foreignKey: "productId" });
    }
  }
  products.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      availableQty: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
      productImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  return products;
};
