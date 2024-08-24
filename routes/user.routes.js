const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')
//route
router.post("/register", authController.signUp)
router.get("/", userController.getAllUsers)


module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nom
 *         - prenom
 *       properties:
 *         id:
 *           type: string
 *           description: ID auto-généré de l'utilisateur
 *         nom:
 *           type: string
 *           description: Nom de l'utilisateur
 *         prenom:
 *           type: string
 *           description: Prénom de l'utilisateur
 *         atelier:
 *           type: string
 *           description: Atelier de l'utilisateur
 *         entrance:
 *           type: string
 *           description: Entrée de l'utilisateur
 *       example:
 *         nom: Dupont
 *         prenom: Jean
 *         atelier: Atelier A
 *         entrance: Entrée 1
 */

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Récupère la liste des utilisateurs
 *     tags: [User]
 *     responses:
 *       200:
 *         description: La liste des utilisateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Crée un nouvel utilisateur
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Erreur dans la création de l'utilisateur
 */

