const router = require('express').Router()
const IngredientController = require("../controllers/ingredientController")

router.get("/?filterBy=", IngredientController.getAllIngredient)
router.post("/", IngredientController.createIngredient)
router.put("/:ingredientId", IngredientController.updateIngredient)
router.delete("/:ingredientId", IngredientController.deleteIngredient)

module.exports = router;
