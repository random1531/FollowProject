const FormationModel = require('../models/formation.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllFormation = async (req, res) => {
    try {
        const formations = await FormationModel.find().select();
        res.status(200).json(formations);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des formations", error });
    }
};


module.exports.createFormation = async (req, res) => {
    const { nom_formation, type_formation, recyclage } = req.body;

    if (!nom_formation || nom_formation.trim() === '') {
        return res.status(400).json({ message: "Le nom de la formation est requis." });
    }

    try {
        const formation = await FormationModel.create({ nom_formation, type_formation, recyclage });
        res.status(201).json(formation);
    } catch (error) {
        console.error("Erreur lors de la création de la formation :", error);
        if (error.code === 11000) {
            return res.status(400).json({ message: "Le nom de la formation existe déjà, veuillez en choisir un autre." });
        }
        res.status(400).json({ message: "Erreur lors de la création de la formation", error });
    }
};
