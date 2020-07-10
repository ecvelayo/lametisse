const express = require("express");
const router = express.Router();
const accountController = require('../controllers/accountController.js');

// router.get("/", accountController.login);
// router.post("/login", accountController.loginUser);
router.post("/create", accountController.create);
// router.post("/update", accountController.update);
// router.get("/user", accountController.read);
// router.post("/delete", accountController.deleteAccount);

module.exports = router;