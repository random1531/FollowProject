const OperateurModel = require('../models/operateur.model')
const ObjectID = require('mongoose').Types.ObjectId


module.exports.addOperateur = async (req, res) => {
    const {
        nom, prenom, atelier, entrance, id_habilitation
    } = req.body;
    try {
        const operateur = await OperateurModel.create({ nom, prenom, atelier, entrance, id_habilitation });
        res.status(201).json({ operateur: operateur._id });
    } catch (err) {
        res.status(400).send({ err });
    }
};



module.exports.getAllOperateurs = async(req, res) => {
    const operateurs = await OperateurModel.find().select()
    res.status(200).json(operateurs)
}





module.exports.updateOperateur = async(req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu : ' + req.params.id)

    try {
        await OperateurModel.findOneAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                    bio: req.body.bio
                }
            },
            {new:true, upsert:true, setDefaultsOnInsert:true},
            (err, data) => {
                if(!err) return res.status(200).json(data)
                if(err) return res.status(500).json({message: err})
            }
        )
    } catch (err) {
        return res.status(500).json({message: err})
    }
}

module.exports.deleteOperateur = async(req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu : ' + req.params.id)

    try {
        await OperateurModel.remove({_id: req.params.id}).exec()
        res.status(200).json({message: "Opérateur supprimé avec succès."})
    } catch (err) {
        return res.status(500).json({message: err})
    }
}

module.exports.operateurInfo = async(req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu : ' + req.params.id)

    OperateurModel.findById(req.params.id, (err, data) => {
        if(!err) res.status(200).json(data)
        else console.log('ID inconnu : ' + err)
    })
}
