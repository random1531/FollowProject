const express = require('express');
const router = express.Router();
const formationController = require('../controllers/formation.controller'); // Vérifiez ce chemin

// Route POST pour créer une formation
router.post("/addnew", formationController.createFormation);

// Route GET pour récupérer toutes les formations
router.get("/", formationController.getAllFormation);

module.exports = router;
