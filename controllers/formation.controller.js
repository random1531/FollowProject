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


module.exports.updateFormation = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).json({ message: "ID inconnu : " + req.params.id });
    }

    const { nom_formation, type_formation, recyclage } = req.body;

    if (!nom_formation || nom_formation.trim() === '') {
        return res.status(400).json({ message: "Le nom de la formation est requis." });
    }

    try {
        const formation = await FormationModel.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { nom_formation, type_formation, recyclage } },
            { new: true }
        );
        res.status(200).json(formation);
    } catch (error) {
        console.error("Erreur lors de la mise à jour de la formation :", error);
        if (error.code === 11000) {
            return res.status(400).json({ message: "Le nom de la formation existe déjà, veuillez en choisir un autre." });
        }
        res.status(400).json({ message: "Erreur lors de la mise à jour de la formation", error });
    }
}

module.exports.deleteFormation = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).json({ message: "ID inconnu : " + req.params.id });
    }

    try {
        await FormationModel.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Formation supprimée avec succès." });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression de la formation", error });
    }
}