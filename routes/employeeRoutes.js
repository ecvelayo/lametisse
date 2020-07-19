const express = require("express");
const router = express.Router();
const employeeController = require('../controllers/employeeController.js');

// router.post("/", employeeController.login);
router.get("/all", employeeController.listEmployees);
router.get("/id", employeeController.retrievebyID);
// router.post("/in", employeeController.timeIn);
// router.get("/login", employeeController.login);
// router.get("/fillup", employeeController.fillUp);
// router.post("/fillup", employeeController.fillUpDetails)
// router.post("/out", employeeController.timeOut);
// router.post("/update", employeeController.update);
// router.get("/user", employeeController.read);
// router.post("/delete", employeeController.deleteAccount);

module.exports = router;