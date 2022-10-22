const ProductController = require("../controllers/productController");
const router = require("express").Router();

router.get("/", ProductController.getAllProduct);
router.post("/", ProductController.createProduct);
router.put("/:productId", ProductController.updateProduct);
router.delete("/:productId", ProductController.deleteProduct);

module.exports = router;
