const UserModel = require('../models/user.model')

module.exports.signUp = async (req, res) => {
    const {
        nom, prenom, atelier, entrance, id_habilitation
    } = req.body
    try{
        const user = await UserModel.create({nom, prenom, atelier, entrance, id_habilitation});
        res.status(201).json({user: user._id})
    }
    catch(err){
        res.status(400).send({err})
    }
}