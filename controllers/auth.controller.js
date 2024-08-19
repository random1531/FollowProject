const UserModel = require('../models/user.model')

module.exports.signUp = async (req, res) => {
    const {
        nom, prenom
    } = req.body
    try{
        const user = await UserModel.create({nom, prenom});
        res.status(201).json({user: user._id})
    }
    catch(err){
        res.status(400).send({err})
    }
}