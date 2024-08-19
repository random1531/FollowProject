const habilitationModel = require('../models/habilitation.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllHabilitation = async (req, res) => {
    try {
        const habilitations = await habilitationModel.find().select();
        res.status(200).json(habilitations);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des habilitations", error });
    }
};


module.exports.createHabilitation = async (req, res) => {
    const { id_operator, id_formation, date_de_formation, date_de_recyclage, qcm, autorisation_interne, commentaire } = req.body;
    try {
        const habilitation = await habilitationModel.create({ id_operator, id_formation, date_de_formation, date_de_recyclage, qcm, autorisation_interne, commentaire });
        res.status(201).json(habilitation);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la création de l'habilitation", error });
    }
};