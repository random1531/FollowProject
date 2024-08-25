const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

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

// Middleware pour hasher le mot de passe avant de sauvegarder l'utilisateur
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);  // Génère un sel avec un facteur de coût de 10
        this.password = await bcrypt.hash(this.password, salt);  // Hash le mot de passe
        next();
    } catch (error) {
        return next(error);
    }
});

// Méthode pour comparer le mot de passe
userSchema.methods.comparePassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword, this.password);
};


userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id, role: this.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    return token;
};


const UserModel = mongoose.model('user', userSchema)
module.exports= UserModel