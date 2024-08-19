const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
    id_operator: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    id_formation: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    date_de_formation: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 255,
        trim: true
    },
    date_de_recyclage: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 255,
        trim: true
    },
    qcm: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 255,
        trim: true
    },
    autorisation_interne: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 255,
        trim: true
    },
    commentaire: {
        type: String,
        required: false,
        minLength: 4,
        maxLength: 255,
        trim: true
    }
});

const FormationModel = mongoose.model('habilitation', formationSchema);
module.exports = FormationModel;
