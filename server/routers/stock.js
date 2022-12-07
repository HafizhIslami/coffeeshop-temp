const router = require("express").Router();
const StockController = require("../controllers/stockController");

router.get("/?filterBy=", StockController.getAllStock);
router.post("/", StockController.createStock);
router.put("/:stockId", StockController.updateStock);
router.delete("/:stockId", StockController.deleteStock);

module.exports = router;
