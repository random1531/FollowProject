const express = require('express');
const router = express.Router();
const habilitationController = require('../controllers/habilitation.controller'); // Vérifiez ce chemin

// Route POST pour créer une habilitation
router.post("/newhabilitation", habilitationController.createHabilitation);

// Route GET pour récupérer toutes les habilitations
router.get("/", habilitationController.getAllHabilitation);

module.exports = router;
