const router = require("express").Router()
const routerCategory = require('./category')
const routerProduct = require('./product')
const routerStock = require('./stock')

router.use("/register", routerRegister);
router.use(routerLogin);
router.use("/customer", routerCustomer);
router.use("/categories", routerCategory);
router.use("/products", routerProduct);
router.use("/stocks", routerStock);
router.use(authentication);
router.use(routerAdmin);
router.use(errorHandler);