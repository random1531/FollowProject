const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        userName:{
            type: String,
            required: true,
            minLength: 4,
            maxLength: 255,
            unique: true,
            trimp: true
        },
        password : {
            type: String,
            required: true,
            minLength: 4,
            maxLength: 255,
            unique: false,
            trimp: true
        },
        role:{
            type: String,
            required: true,
            minLength: 1,
            maxLength: 255,
            unique: false,
            trimp: true
        }
    }
)

const UserModel = mongoose.model('user', userSchema)
module.exports= UserModel