const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')
const operateurController = require('../controllers/operateur.controller')
require('../documentation api/doc')

router.post("/addOperateur", operateurController.addOperateur);
router.get("/", operateurController.getAllOperateurs)
router.get("/:id", operateurController.operateurInfo)
router.patch("/:id", operateurController.updateOperateur)
router.delete("/:id", operateurController.deleteOperateur)

module.exports = router;
