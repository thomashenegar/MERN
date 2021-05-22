const Pirate = require("../models/pirate.models");

//CREATE
module.exports.createOne = (req, res) => {
    Pirate.create(req.body)
    .then(addPirate => res.json({Pirate: addPirate}))
    .catch(err => res.json({message: "Something went wrong trying to add the Pirate to the database.", error: err}))
}
//GET ALL
module.exports.findAll = (req, res) => {
    Pirate.find()
        .then(allPirate => res.json({Pirate: allPirate}))
        .catch(err => res.json({message: "Something went wrong when finding all the Pirates!", error:err}))
}
//GET ONE
module.exports.findOnePirate = (req, res) => {
    Pirate.findOne({_id: req.params.id})
        .then(onePirate => res.json({Pirate: onePirate}))
        .catch(err => res.json({message: "Something went wrong when finding one Pirate!", error:err}))
}
//DELETE ONE
module.exports.deleteOnePirate = (req, res) =>{
    Pirate.deleteOne({_id: req.params.id})
        .then(res.json({message: "Pirate deleted."}))
        .catch(err => res.json({message: "Something went wrong when deleting the Pirate.", error: err}))
}
