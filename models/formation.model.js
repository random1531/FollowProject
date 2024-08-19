const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
    nom_formation: {
        type: String,
        required: true,
        unique: true,        
        trim: true
    },
    type_formation: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 255,
        trim: true
    },
    recyclage: {
        type: String,
        required: false,
        minLength: 4,
        maxLength: 255,
        trim: true
    },
});

const FormationModel = mongoose.model('formation', formationSchema);
module.exports = FormationModel;