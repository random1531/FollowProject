const mongoose = require('mongoose')

const operateurSchema = new mongoose.Schema(
    {
        nom:{
            type: String,
            required: true,
            minLength: 4,
            maxLength: 255,
            unique: false,
            trimp: true
        },
        prenom : {
            type: String,
            required: true,
            minLength: 4,
            maxLength: 255,
            unique: false,
            trimp: true
        },
        atelier:{
            type: String,
            required: false,
            minLength: 1,
            maxLength: 255,
            unique: false,
            trimp: true
        },
        entrance:{
            type: String,
            required: false,
            minLength: 4,
            maxLength: 255,
            unique: false,
            trimp: true
        },
        id_habilitation:{
            type: [mongoose.Schema.Types.ObjectId],  // Utiliser ObjectId pour les références
            ref: 'habilitation',
            require: false // Référence au modèle Habilitation
        }
    },{
        timestamps: true
    }
)

const OperateurModel = mongoose.model('operateur', operateurSchema)
module.exports= OperateurModel
