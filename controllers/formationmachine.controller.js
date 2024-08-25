const FormationMachineModel = require('../models/formationmachine.model');
const ObjectID = require('mongoose').Types.ObjectId;



module.exports.getAllFormationMachines = async (req, res) => {
    try {
        const formationMachines = await FormationMachineModel.find().select();
        res.status(200).json(formationMachines);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des machines", error });
    }
};

module.exports.addFormationMachine = async (req, res) => {
    const { nom_machine, type_machine, id_formation } = req.body;
    try {
        const formationMachine = await FormationMachineModel.create({ nom_machine, type_machine, id_formation });
        res.status(201).json(formationMachine);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la création de la machine", error });
    }
};

module.exports.updateFormationMachine = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID inconnu :' + req.params.id);
    }

    try {
        const updatedFormationMachine = await FormationMachineModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    nom_machine: req.body.nom_machine,
                    type_machine: req.body.type_machine,
                    id_formation: req.body.id_formation
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );
        res.status(200).json(updatedFormationMachine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.deleteFormationMachine = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID inconnu :' + req.params.id);
    }

    try {
        await FormationMachineModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

