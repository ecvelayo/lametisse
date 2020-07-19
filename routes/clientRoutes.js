const express = require("express");
const router = express.Router();
const clientcontroller = require('../controllers/clientController.js');

router.post("/create", clientcontroller.create);
router.get("/user", clientcontroller.retrieve);

module.exports = router;