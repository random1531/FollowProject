const express = require('express');
const router = express.Router();
const habilitationController = require('../controllers/habilitation.controller');
require('../documentation api/doc')

router.post("/newhabilitation", habilitationController.createHabilitation);
router.get("/", habilitationController.getAllHabilitation);
router.get("/:id", habilitationController.getHabilitationById);
router.patch("/:id", habilitationController.updateHabilitation);
router.delete("/:id", habilitationController.deleteHabilitation);

module.exports = router;
