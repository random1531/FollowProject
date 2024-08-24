const HabilitationModel = require('../models/habilitation.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllHabilitation = async (req, res) => {
    try {
        const habilitations = await HabilitationModel.find().select();
        res.status(200).json(habilitations);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des habilitations", error });
    }
};

module.exports.createHabilitation = async (req, res) => {
    const { id_operator, id_formation, date_de_formation, date_de_recyclage, qcm, autorisation_interne, commentaire } = req.body;
    try {
        const habilitation = await HabilitationModel.create({ id_operator, id_formation, date_de_formation, date_de_recyclage, qcm, autorisation_interne, commentaire });
        res.status(201).json(habilitation);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la création de l'habilitation", error });
    }
};

module.exports.updateHabilitation = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID inconnu :' + req.params.id);
    }

    try {
        const updatedHabilitation = await HabilitationModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    id_operator: req.body.id_operator,
                    id_formation: req.body.id_formation,
                    date_de_formation: req.body.date_de_formation,
                    date_de_recyclage: req.body.date_de_recyclage,
                    qcm: req.body.qcm,
                    autorisation_interne: req.body.autorisation_interne,
                    commentaire: req.body.commentaire
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );
        res.status(200).json(updatedHabilitation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.deleteHabilitation = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID inconnu :' + req.params.id);
    }

    try {
        await HabilitationModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.getHabilitationById = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID inconnu :' + req.params.id);
    }

    try {
        const habilitation = await HabilitationModel.findById(req.params.id);
        if (!habilitation) return res.status(404).json({ message: "Habilitation non trouvée" });
        res.status(200).json(habilitation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
