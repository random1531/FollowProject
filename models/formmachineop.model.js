const mongoose = require('mongoose');

const formMachineOperateurSchema = new mongoose.Schema({
    id_formation_machine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'formationmachine',
        required: true,
        trim: true
    },
    id_operateur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'operateur',
        required: true,
        trim: true
    },
    date_debut: {
        type: Date,
        required: true,
        trim: true
    },
    date_fin: {
        type: Date,
        required: false,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    fichier_signe: {
        type: String,
        required: false,
        trim: true
    }

})

const FormMachineOperateurModel = mongoose.model('formmachineoperateur', formMachineOperateurSchema);

module.exports = FormMachineOperateurModel;