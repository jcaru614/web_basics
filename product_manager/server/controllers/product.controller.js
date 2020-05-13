const mongoose = require('mongoose');
const Product = mongoose.model("Product");

module.exports = {
    readAll: (req, res) => {
        Product.find()
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    readOne: (req, res) => {
        Product.findOne({_id:req.params.id})
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    create: (req, res) => {
        Product.create(req.body)
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    updatedOne: (req, res) => {
        Product.updateOne({_id:req.params.id}, req.body, {new:true, useValidators:true})
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    deleteOne: (req, res) => {
        Product.deleteOne({_id:req.params.id})
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
}
