const express = require('express');
const router = express.Router();
const formMachineOpController = require('../controllers/formmachineop.controller')
require('../documentation api/doc')

router.post("/addFormMachineOp", formMachineOpController.addFormMachineOp);
router.get("/", formMachineOpController.getAllFormMachineOps)
router.patch("/:id", formMachineOpController.updateFormMachineOp)
router.delete("/:id", formMachineOpController.deleteFormMachineOp)

module.exports = router;