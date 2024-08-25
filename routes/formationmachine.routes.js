const express = require('express');
const router = express.Router();
const formationMachineController = require('../controllers/formationmachine.controller')
require('../documentation api/doc')

router.post("/addFormationMachine", formationMachineController.addFormationMachine);
router.get("/", formationMachineController.getAllFormationMachines)
router.patch("/:id", formationMachineController.updateFormationMachine)
router.delete("/:id", formationMachineController.deleteFormationMachine)


module.exports = router;