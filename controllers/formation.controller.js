const FormationModel = require('../models/formation.model');

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
    try {
        const formation = await FormationModel.create({ nom_formation, type_formation, recyclage });
        res.status(201).json(formation);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la création de la formation", error });
    }
};