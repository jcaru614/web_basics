const mongoose = require('mongoose');

const Author = mongoose.model('Author');
module.exports = {
    create: (req, res) => {
        Author.create(req.body)
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    readAll: (req, res) => {
        console.log('got here')
        Author.find()
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    readOne: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    updateOne: (req, res) => {
        Author.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    deleteOne: (req, res) => {
        console.log("this is the log", req.params.id)
        Author.deleteOne({ _id: req.params.id })
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },

}