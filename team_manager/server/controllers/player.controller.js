const mongoose = require('mongoose');

const Player = mongoose.model('Player');

module.exports = {
    create: (req, res) => {
        Player.create(req.body)
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    readAll: (req, res) => {
        Player.find()
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    readOne: (req, res) => {
        Player.findOne({ _id: req.params.id })
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    updateOne: (req, res) => {
        Player.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    deleteOne: (req, res) => {
        Player.deleteOne({ _id: req.params.id })
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },

}