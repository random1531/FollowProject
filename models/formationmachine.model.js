const mongoose = require('mongoose');

const formationMachineSchema = new mongoose.Schema({    
        nom_machine: {
            type: String,
            required: true,
            minLength: 4,
            maxLength: 255,
            trim: true
        },
        type_machine: {
            type: String,
            required: true,
            minLength: 4,
            maxLength: 255,
            trim: true
        },
        id_formation: {
            type: mongoose.Schema.Types.ObjectId,  
            ref: 'formation',  
            required: true,
            trim: true
        }

        })

const FormationMachineModel = mongoose.model('formationmachine', formationMachineSchema);
module.exports = FormationMachineModel