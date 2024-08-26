const express = require('express');
const router = express.Router();
require('../documentation api/doc')
const formationController = require('../controllers/formation.controller');
const auth = require('../controllers/auth.middleware'); // Assurez-vous que le chemin est correct
const checkRole = require('../controllers/checkRole'); // Assurez-vous que le chemin est correct

router.post("/addnew", auth, checkRole(['respformation', 'admin']), formationController.createFormation);
router.get("/", auth, checkRole(['respformation', 'admin']), formationController.getAllFormation);
router.patch("/:id", auth, checkRole(['respformation', 'admin']), formationController.updateFormation);
router.delete("/:id", auth, checkRole(['respformation', 'admin']), formationController.deleteFormation);

module.exports = router;
