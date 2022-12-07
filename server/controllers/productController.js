const { Product } = require("../models");

class ProductController {
  static async getAllProduct(req, res, next) {
    try {
      const data = await Product.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createProduct(req, res, next) {
    try {
      const newProduct = { name: req.body.name };
      const data = await Product.create(newProduct);
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const ProductId = +req.params.ProductId;
      const findProduct = await Product.findByPk(ProductId);
      if (!findProduct)
        throw {
          code: 404,
          error: `Product with id ${ProductId} is not found !`,
        };
      const updatedProduct = { name: req.body.name };
      await Product.update(updatedProduct, { where: { id: ProductId } });
      res.status(200).json({ message: `Update success` });
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const ProductId = +req.params.ProductId;
      const findProduct = await Product.findByPk(ProductId);
      if (!findProduct)
        throw {
          code: 404,
          error: `Product with id ${ProductId} is not found !`,
        };
      await Product.destroy({ where: { id: ProductId } });
      res
        .status(200)
        .json({ message: `Delete Product ${findProduct.name} success` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
