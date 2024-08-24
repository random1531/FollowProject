const express = require('express');
const router = express.Router();
const habilitationController = require('../controllers/habilitation.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Habilitation:
 *       type: object
 *       required:
 *         - id_operator
 *         - id_formation
 *         - date_de_formation
 *         - date_de_recyclage
 *         - qcm
 *         - autorisation_interne
 *       properties:
 *         id:
 *           type: string
 *           description: ID auto-généré de l'habilitation
 *         id_operator:
 *           type: string
 *           description: Référence à l'opérateur habilité
 *         id_formation:
 *           type: string
 *           description: Référence à la formation suivie par l'opérateur
 *         date_de_formation:
 *           type: string
 *           description: Date de la formation
 *         date_de_recyclage:
 *           type: string
 *           description: Date de recyclage
 *         qcm:
 *           type: string
 *           description: Résultat du QCM
 *         autorisation_interne:
 *           type: string
 *           description: Autorisation interne pour l'habilitation
 *         commentaire:
 *           type: string
 *           description: Commentaires supplémentaires
 *       example:
 *         id_operator: "64a67a2e9b348c00123a5678"
 *         id_formation: "64a67a2e9b348c00123a5679"
 *         date_de_formation: "2023-08-19"
 *         date_de_recyclage: "2024-08-19"
 *         qcm: "Réussi"
 *         autorisation_interne: "Oui"
 *         commentaire: "Formation validée avec succès"
 */

/**
 * @swagger
 * /api/habilitation/newhabilitation:
 *   post:
 *     summary: Crée une nouvelle habilitation
 *     tags: [Habilitation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Habilitation'
 *     responses:
 *       201:
 *         description: Habilitation créée avec succès
 *       400:
 *         description: Erreur dans la création de l'habilitation
 */
router.post("/newhabilitation", habilitationController.createHabilitation);

/**
 * @swagger
 * /api/habilitation:
 *   get:
 *     summary: Récupère la liste de toutes les habilitations
 *     tags: [Habilitation]
 *     responses:
 *       200:
 *         description: La liste des habilitations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Habilitation'
 */
router.get("/", habilitationController.getAllHabilitation);

/**
 * @swagger
 * /api/habilitation/{id}:
 *   get:
 *     summary: Récupère une habilitation par son ID
 *     tags: [Habilitation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'habilitation
 *     responses:
 *       200:
 *         description: Détails de l'habilitation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habilitation'
 *       404:
 *         description: Habilitation non trouvée
 */
router.get("/:id", habilitationController.getHabilitationById);

/**
 * @swagger
 * /api/habilitation/{id}:
 *   put:
 *     summary: Met à jour une habilitation par son ID
 *     tags: [Habilitation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'habilitation à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Habilitation'
 *     responses:
 *       200:
 *         description: Habilitation mise à jour avec succès
 *       400:
 *         description: ID inconnu ou mauvaise requête
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", habilitationController.updateHabilitation);

/**
 * @swagger
 * /api/habilitation/{id}:
 *   delete:
 *     summary: Supprime une habilitation par son ID
 *     tags: [Habilitation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'habilitation à supprimer
 *     responses:
 *       200:
 *         description: Habilitation supprimée avec succès
 *       400:
 *         description: ID inconnu ou mauvaise requête
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", habilitationController.deleteHabilitation);

module.exports = router;
