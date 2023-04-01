const ProductService = require("../services/product.service");

const getAllProducts = async (req, res, next) => {
  try {
    const product = await ProductService.getAll();
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const newproduct = req.body;
    const product = await ProductService.create(newproduct);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await ProductService.update(id, { description });
    res.status(204).send();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createProduct,
  updateProduct,
  getAllProducts,
};
