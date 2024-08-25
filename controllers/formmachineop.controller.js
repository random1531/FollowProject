const FormMachineOperateurModel = require('../models/formmachineop.model');
const ObjectID = require('mongoose').Types.ObjectId;


module.exports.getAllFormMachineOps = async (req, res) => {
    try {
        const formMachineOps = await FormMachineOperateurModel.find().select();
        res.status(200).json(formMachineOps);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des machines", error });
    }
};

module.exports.addFormMachineOp = async (req, res) => {
    const { id_formation_machine, id_operateur, date_debut, date_fin, type, fichier_signe } = req.body;
    try {
        const formMachineOp = await FormMachineOperateurModel.create({ id_formation_machine, id_operateur, date_debut, date_fin, type, fichier_signe });
        res.status(201).json(formMachineOp);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la création de la machine", error });
    }
};

module.exports.updateFormMachineOp = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID inconnu :' + req.params.id);
    }

    try {
        const updatedFormMachineOp = await FormMachineOperateurModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    id_formation_machine: req.body.id_formation_machine,
                    id_operateur: req.body.id_operateur,
                    date_debut: req.body.date_debut,
                    date_fin: req.body.date_fin,
                    type: req.body.type,
                    fichier_signe: req.body.fichier_signe
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );
        res.status(200).json(updatedFormMachineOp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.deleteFormMachineOp = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID inconnu :' + req.params.id);
    }

    try {
        await FormMachineOperateurModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

