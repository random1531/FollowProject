const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
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
            minLength: 4,
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
        formation:{
            type: [String]
        }
    },{
        timestamps: true
    }
    
)

const UserModel = mongoose.model('user', userSchema)
module.exports= UserModel 