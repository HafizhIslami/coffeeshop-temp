const router = require("express").Router();
const CategoryController = require("../controllers/categoryController");

router.get("/tes", (req,res) => {
  res.status(200).json('masokk')
});
router.get("/", CategoryController.getAllCategory);
router.post("/", CategoryController.createCategory);
router.put("/:categoryId", CategoryController.updateCategory);
router.delete("/:categoryId", CategoryController.deleteCategory);

module.exports = router;
