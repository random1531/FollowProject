const mongoose = require('mongoose');

const habilitationSchema = new mongoose.Schema({
    id_operator: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',  // Référence au modèle User
        required: false,       
        trim: true
    },
    id_formation: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'formation',  
        required: true,
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

const HabilitationModel = mongoose.model('habilitation', habilitationSchema);
module.exports = HabilitationModel;
