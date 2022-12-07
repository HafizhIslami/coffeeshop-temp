const { Ingredient } = require("../models");

class IngredientController {
  static async getAllIngredient(req, res, next) {
    try {
      const data = await Ingredient.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createIngredient(req, res, next) {
    try {
      const newIngredient = { name: req.body.name };
      const data = await Ingredient.create(newIngredient);
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async updateIngredient(req, res, next) {
    try {
      const IngredientId = +req.params.IngredientId;
      const findIngredient = await Ingredient.findByPk(IngredientId);
      if (!findIngredient)
        throw {
          code: 404,
          error: `Ingredient with id ${IngredientId} is not found !`,
        };
      const updatedIngredient = { name: req.body.name };
      await Ingredient.update(updatedIngredient, { where: { id: IngredientId } });
      res.status(200).json({ message: `Update success` });
    } catch (error) {
      next(error);
    }
  }

  static async deleteIngredient(req, res, next) {
    try {
      const IngredientId = +req.params.IngredientId;
      const findIngredient = await Ingredient.findByPk(IngredientId);
      if (!findIngredient)
        throw {
          code: 404,
          error: `Ingredient with id ${IngredientId} is not found !`,
        };
      await Ingredient.destroy({ where: { id: IngredientId } });
      res
        .status(200)
        .json({ message: `Delete Ingredient ${findIngredient.name} success` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = IngredientController;
