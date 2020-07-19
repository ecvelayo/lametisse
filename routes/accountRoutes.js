const express = require("express");
const router = express.Router();
const accountController = require('../controllers/accountController.js');

// router.get("/", accountController.login);
router.post("/login", accountController.login);
router.post("/create", accountController.create);
router.get("/retrievecode", accountController.retrieveByCode);
// router.post("/update", accountController.update);
// router.get("/user", accountController.read);
router.post("/delete", accountController.deleteByCode);
router.get("/accounts", accountController.retrieveActive);
router.get("/password", accountController.password);
router.get("/decrypt", accountController.decrypt);
router.post("/resetpassword", accountController.updatePassword);

module.exports = router;