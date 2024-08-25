const UserModel = require('../models/user.model')
const ObjectID = require('mongoose').Types.ObjectId

module.exports.addUser = async (req, res) => {
    const {
        userName, password, role
    } = req.body;
    try {
        const user = await UserModel.create({ userName, password, role });
        res.status(201).json({ user: user._id });
    } catch (err) {
        res.status(400).send({ err });
    }
}

module.exports.login = async (req, res) => {
    const { userName, password } = req.body;
    try {
        const user = await UserModel.findOne({ userName });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const validPassword = await user.comparePassword(password);
        if (!validPassword) {
            return res.status(400).json({ message: "Wrong password" });
        }

        const token = user.generateAuthToken();  // Génère le token JWT
        res.status(200).json({ token });  // Renvoie le token JWT
    }
    catch (err) {
        res.status(400).send({ err });
    }
}

