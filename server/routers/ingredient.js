const router = require('express').Router()
const IngredientsController = require("../controllers/ingredientController")

router.get("/?filterBy=", IngredientsController.getAllIngredient)
router.post("/", IngredientsController.createIngredient)
router.put("/:ingredientId", IngredientsController.updateIngredient)
router.delete("/:ingredientId", IngredientsController.deleteIngredient)

module.exports = router;
