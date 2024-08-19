const mongoose = require('mongoose')

const formationSchema = new mongoose.Schema({

    id_operator:{
        type: String,
        require:true,
        unique: true,
        trimp:true
    },

    date_de_formation:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 255,
        unique: false,
        trimp: true
    },
    date_de_recyclage:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 255,
        unique: false,
        trimp: true
    },
    qcm:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 255,
        unique: false,
        trimp: true
    },
    autorisation_interne:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 255,
        unique: false,
        trimp: true
    },
    commentaire:{
        type: String,
        required: false,
        minLength: 4,
        maxLength: 255,
        unique: false,
        trimp: true
    }

})

const formationModel = mongoose.model('formation', formationSchema)
module.exports= formationModel