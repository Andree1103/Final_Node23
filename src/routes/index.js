const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const orderRoutes = require("./orders.routes");
const productRoutes = require("./product.routes");
const productsInCarRoutes = require("./productsInCar.routes");

const ApiRoutes = (app) => {
  app.use("/api/v1", userRoutes);
  app.use("/api/v1", authRoutes);
  app.use("/api/v1", productRoutes);
  app.use("/api/v1", productsInCarRoutes);
  app.use("/api/v1", orderRoutes);
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

module.exports = ApiRoutes;
