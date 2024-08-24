/**
 * @swagger
 * /operateurs/addOperateur:
 *   post:
 *     summary: Add a new operateur
 *     description: Create a new operateur and store it in the database.
 *     tags: 
 *       - Operateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 description: The operateur's last name
 *               prenom:
 *                 type: string
 *                 description: The operateur's first name
 *               atelier:
 *                 type: string
 *                 description: The operateur's workshop or department
 *               entrance:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time of entrance
 *               id_habilitation:
 *                 type: string
 *                 description: The ID of the operateur's habilitation
 *     responses:
 *       201:
 *         description: Operateur created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 operateur:
 *                   type: string
 *                   description: The ID of the newly created operateur
 *       400:
 *         description: Bad request, possibly due to missing or invalid fields
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Operateur:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Operateur ID
 *         nom:
 *           type: string
 *           description: Operateur's last name
 *         prenom:
 *           type: string
 *           description: Operateur's first name
 *         atelier:
 *           type: string
 *           description: Operateur's workshop or department
 *         entrance:
 *           type: string
 *           format: date-time
 *           description: The date and time of entrance
 *         id_habilitation:
 *           type: string
 *           description: The ID of the operateur's habilitation
 */

/**
 * @swagger
 * /operateurs:
 *   get:
 *     summary: Get all operateurs
 *     description: Retrieve a list of all operateurs.
 *     tags: 
 *       - Operateur
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of operateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Operateur'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /operateurs/{id}:
 *   get:
 *     summary: Get operateur information
 *     description: Retrieve the details of a specific operateur by ID.
 *     tags: 
 *       - Operateur
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the operateur to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the operateur information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Operateur'
 *       400:
 *         description: Invalid ID supplied
 *       404:
 *         description: Operateur not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /operateurs/{id}:
 *   patch:
 *     summary: Update an operateur
 *     description: Update the bio of a specific operateur by ID.
 *     tags: 
 *       - Operateur
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the operateur to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bio:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated the operateur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Operateur'
 *       400:
 *         description: Invalid ID supplied
 *       404:
 *         description: Operateur not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /operateurs/{id}:
 *   delete:
 *     summary: Delete an operateur
 *     description: Delete a specific operateur by ID.
 *     tags: 
 *       - Operateur
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the operateur to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted the operateur
 *       400:
 *         description: Invalid ID supplied
 *       404:
 *         description: Operateur not found
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * /habilitations:
 *   get:
 *     summary: Retrieve all habilitations
 *     description: Retrieve a list of all habilitations from the database.
 *     tags: 
 *       - Habilitation
 *     responses:
 *       200:
 *         description: A list of habilitations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Habilitation'
 *       500:
 *         description: Erreur lors de la récupération des habilitations
 */

/**
 * @swagger
 * /habilitations:
 *   post:
 *     summary: Create a new habilitation
 *     description: Create a new habilitation in the database.
 *     tags: 
 *       - Habilitation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_operator:
 *                 type: string
 *               id_formation:
 *                 type: string
 *               date_de_formation:
 *                 type: string
 *                 format: date
 *               date_de_recyclage:
 *                 type: string
 *                 format: date
 *               qcm:
 *                 type: string
 *               autorisation_interne:
 *                 type: string
 *               commentaire:
 *                 type: string
 *     responses:
 *       201:
 *         description: Habilitation created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habilitation'
 *       400:
 *         description: Erreur lors de la création de l'habilitation
 */

/**
 * @swagger
 * /habilitations/{id}:
 *   patch:
 *     summary: Update an existing habilitation
 *     description: Update the details of an existing habilitation by its ID.
 *     tags: 
 *       - Habilitation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the habilitation to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_operator:
 *                 type: string
 *               id_formation:
 *                 type: string
 *               date_de_formation:
 *                 type: string
 *                 format: date
 *               date_de_recyclage:
 *                 type: string
 *                 format: date
 *               qcm:
 *                 type: string
 *               autorisation_interne:
 *                 type: string
 *               commentaire:
 *                 type: string
 *     responses:
 *       200:
 *         description: Habilitation updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habilitation'
 *       400:
 *         description: Invalid ID supplied
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /habilitations/{id}:
 *   delete:
 *     summary: Delete a habilitation
 *     description: Delete an existing habilitation by its ID.
 *     tags: 
 *       - Habilitation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the habilitation to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Habilitation deleted successfully
 *       400:
 *         description: Invalid ID supplied
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /habilitations/{id}:
 *   get:
 *     summary: Get habilitation by ID
 *     description: Retrieve the details of a specific habilitation by its ID.
 *     tags: 
 *       - Habilitation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the habilitation to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the habilitation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habilitation'
 *       400:
 *         description: Invalid ID supplied
 *       404:
 *         description: Habilitation not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Habilitation:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID of the habilitation
 *         id_operator:
 *           type: string
 *           description: ID of the operator
 *         id_formation:
 *           type: string
 *           description: ID of the formation
 *         date_de_formation:
 *           type: string
 *           format: date
 *           description: Date of the formation
 *         date_de_recyclage:
 *           type: string
 *           format: date
 *           description: Date of the recycling
 *         qcm:
 *           type: string
 *           description: QCM result
 *         autorisation_interne:
 *           type: string
 *           description: Internal authorization status
 *         commentaire:
 *           type: string
 *           description: Additional comments
 */



/**
 * @swagger
 * /formations:
 *   get:
 *     summary: Retrieve all formations
 *     description: Retrieve a list of all formations from the database.
 *     tags: 
 *       - Formation
 *     responses:
 *       200:
 *         description: A list of formations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Formation'
 *       500:
 *         description: Erreur lors de la récupération des formations
 */


/**
 * @swagger
 * /formations:
 *   post:
 *     summary: Create a new formation
 *     description: Create a new formation in the database.
 *     tags: 
 *       - Formation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom_formation:
 *                 type: string
 *                 description: The name of the formation
 *               type_formation:
 *                 type: string
 *                 description: The type of formation
 *               recyclage:
 *                 type: boolean
 *                 description: Indicates if the formation requires recycling
 *     responses:
 *       201:
 *         description: Formation created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Formation'
 *       400:
 *         description: Bad request, possibly due to missing or invalid fields
 */


/**
 * @swagger
 * /formations/{id}:
 *   patch:
 *     summary: Update an existing formation
 *     description: Update the details of an existing formation by its ID.
 *     tags: 
 *       - Formation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the formation to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom_formation:
 *                 type: string
 *                 description: The name of the formation
 *               type_formation:
 *                 type: string
 *                 description: The type of formation
 *               recyclage:
 *                 type: boolean
 *                 description: Indicates if the formation requires recycling
 *     responses:
 *       200:
 *         description: Formation updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Formation'
 *       400:
 *         description: Invalid ID supplied or bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /formations/{id}:
 *   delete:
 *     summary: Delete a formation
 *     description: Delete an existing formation by its ID.
 *     tags: 
 *       - Formation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the formation to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Formation deleted successfully
 *       400:
 *         description: Invalid ID supplied
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Formation:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID of the formation
 *         nom_formation:
 *           type: string
 *           description: The name of the formation
 *         type_formation:
 *           type: string
 *           description: The type of formation
 *         recyclage:
 *           type: boolean
 *           description: Indicates if the formation requires recycling
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Formation:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID of the formation
 *         nom_formation:
 *           type: string
 *           description: The name of the formation
 *         type_formation:
 *           type: string
 *           description: The type of formation
 *         recyclage:
 *           type: boolean
 *           description: Indicates if the formation requires recycling
 */

/**
 * @swagger
 * /formations:
 *   get:
 *     summary: Retrieve all formations
 *     description: Retrieve a list of all formations from the database.
 *     tags: 
 *       - Formation
 *     responses:
 *       200:
 *         description: A list of formations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Formation'
 *       500:
 *         description: Erreur lors de la récupération des formations
 */

/**
 * @swagger
 * /formations:
 *   post:
 *     summary: Create a new formation
 *     description: Create a new formation in the database.
 *     tags: 
 *       - Formation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom_formation:
 *                 type: string
 *                 description: The name of the formation
 *               type_formation:
 *                 type: string
 *                 description: The type of formation
 *               recyclage:
 *                 type: boolean
 *                 description: Indicates if the formation requires recycling
 *     responses:
 *       201:
 *         description: Formation created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Formation'
 *       400:
 *         description: Bad request, possibly due to missing or invalid fields
 */

/**
 * @swagger
 * /formations/{id}:
 *   patch:
 *     summary: Update an existing formation
 *     description: Update the details of an existing formation by its ID.
 *     tags: 
 *       - Formation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the formation to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom_formation:
 *                 type: string
 *                 description: The name of the formation
 *               type_formation:
 *                 type: string
 *                 description: The type of formation
 *               recyclage:
 *                 type: boolean
 *                 description: Indicates if the formation requires recycling
 *     responses:
 *       200:
 *         description: Formation updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Formation'
 *       400:
 *         description: Invalid ID supplied or bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /formations/{id}:
 *   delete:
 *     summary: Delete a formation
 *     description: Delete an existing formation by its ID.
 *     tags: 
 *       - Formation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the formation to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Formation deleted successfully
 *       400:
 *         description: Invalid ID supplied
 *       500:
 *         description: Internal server error
 */

