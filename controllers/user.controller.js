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
    try {
        const user = await UserModel.findOne(req.body.userName, req.body.password)
        res.send(user)
    } catch {

        res.status(400).send()
    }
}