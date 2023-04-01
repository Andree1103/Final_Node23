"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasMany(models.cars, {
        foreignKey: "userId",
      });
      users.hasMany(models.orders, { foreignKey: "userId" });
      users.hasMany(models.products, { foreignKey: "userId" });
    }
  }
  users.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      role: DataTypes.ENUM(("ADMIN", "SELLER", "USER")),
    },
    {
      sequelize,
      modelName: "users",
      hooks: {
        beforeCreate: async (users) => {
          try {
            const salt = await bcrypt.genSalt(10);
            const passwodHash = await bcrypt.hash(users.password, salt);
            users.password = passwodHash;
          } catch (error) {
            throw error;
          }
        },
      },
    }
  );
  return users;
};
