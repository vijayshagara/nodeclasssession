const express = require("express");
const employeeModules = require("../modules/employeeModule");

const router = express.Router();

router.get("/get", employeeModules.getEmpolyees);
router.put("/update/:id",employeeModules.updateEmpolyees);
router.post("/create",employeeModules.createEmpolyees);
router.delete("/delete/:id",employeeModules.deleteEmpolyees);

module.exports = router;
