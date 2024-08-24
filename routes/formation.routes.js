const express = require('express');
const router = express.Router();
const formationController = require('../controllers/formation.controller'); // Vérifiez ce chemin

// Route POST pour créer une formation
router.post("/addnew", formationController.createFormation);

// Route GET pour récupérer toutes les formations
router.get("/", formationController.getAllFormation);

module.exports = router;


/**
 * @swagger
 * components:
 *   schemas:
 *     Formation:
 *       type: object
 *       required:
 *         - nom_formation
 *         - type_formation
 *       properties:
 *         id:
 *           type: string
 *           description: ID auto-généré de la formation
 *         nom_formation:
 *           type: string
 *           description: Nom de la formation
 *         type_formation:
 *           type: string
 *           description: Type de la formation
 *         recyclage:
 *           type: string
 *           description: Informations sur le recyclage de la formation
 *       example:
 *         nom_formation: Sécurité au travail
 *         type_formation: Obligatoire
 *         recyclage: Annuel
 */

/**
 * @swagger
 * /api/formation:
 *   get:
 *     summary: Récupère la liste des formations
 *     tags: [Formation]
 *     responses:
 *       200:
 *         description: La liste des formations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Formation'
 */

/**
 * @swagger
 * /api/formation/addnew:
 *   post:
 *     summary: Crée une nouvelle formation
 *     tags: [Formation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Formation'
 *     responses:
 *       201:
 *         description: Formation créée avec succès
 *       400:
 *         description: Erreur dans la création de la formation
 */