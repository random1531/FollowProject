/**
 * @swagger
 * tags:
 *   name: Formations
 *   description: Gestion des formations
 */

/**
 * @swagger
 * /formations:
 *   get:
 *     summary: Récupère toutes les formations
 *     tags: [Formations]
 *     responses:
 *       200:
 *         description: Liste des formations récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/models/formation.model'
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /formations/addnew:
 *   post:
 *     summary: Crée une nouvelle formation
 *     tags: [Formations]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/models/formation.model'
 *     responses:
 *       201:
 *         description: Formation créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/models/formation.model'
 *       400:
 *         description: Erreur de validation ou nom de formation déjà existant
 */

/**
 * @swagger
 * /formations/{id}:
 *   patch:
 *     summary: Met à jour une formation existante
 *     tags: [Formations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de la formation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/routes/formation.routes'
 *     responses:
 *       200:
 *         description: Formation mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/models/formation.model'
 *       400:
 *         description: Erreur de validation ou ID invalide
 */

/**
 * @swagger
 * /formations/{id}:
 *   delete:
 *     summary: Supprime une formation
 *     tags: [Formations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de la formation
 *     responses:
 *       200:
 *         description: Formation supprimée avec succès
 *       400:
 *         description: ID invalide
 */
