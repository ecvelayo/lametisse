const express = require("express");
const router = express.Router();
const registrationController = require("../controllers/registrationController");
const productController = require("../controllers/productsController");

router.post("/test", registrationController.loginDetails);
router.post("/client", registrationController.clientExists);
router.post("/addproducts", productController.addProduct);
router.post("/addbarcode", productController.addBarcode);

module.exports = router;