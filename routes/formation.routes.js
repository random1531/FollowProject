const express = require('express');
const router = express.Router();
const formationController = require('../controllers/formation.controller'); // Vérifiez ce chemin
require('../documentation api/doc')


router.post("/addnew", formationController.createFormation);
router.get("/", formationController.getAllFormation);
router.patch("/:id", formationController.updateFormation);
router.delete("/:id", formationController.deleteFormation);

module.exports = router;


