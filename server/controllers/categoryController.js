const { Category } = require("../models");

class CategoryController {
  static async getAllCategory(req, res, next) {
    try {
      const data = await Category.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createCategory(req, res, next) {
    try {
      const newCategory = { name: req.body.name };
      const data = await Category.create(newCategory);
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async updateCategory(req, res, next) {
    try {
      const categoryId = +req.params.categoryId;
      const findCategory = await Category.findByPk(categoryId);
      if (!findCategory)
        throw {
          code: 404,
          error: `Category with id ${categoryId} is not found !`,
        };
      const updatedCategory = { name: req.body.name };
      await Category.update(updatedCategory, { where: { id: categoryId } });
      res.status(200).json({ message: `Update success` });
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const categoryId = +req.params.categoryId;
      const findCategory = await Category.findByPk(categoryId);
      if (!findCategory)
        throw {
          code: 404,
          error: `Category with id ${categoryId} is not found !`,
        };
      await Category.destroy({ where: { id: categoryId } });
      res
        .status(200)
        .json({ message: `Delete category ${findCategory.name} success` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CategoryController;
