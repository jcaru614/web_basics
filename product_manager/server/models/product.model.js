const mongoose = require('mongoose');

// This is your primary object schema change the fields when copying 
// and pasting into new project. Validation is done in the required field.
// These are simply examples

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true," A title is required"]
    },
    price:{
        type:Number,
        minlength:[true, "price is required"]
    },
    description:[{
        type:String,
        required:[true," A description is required"]
    }]
}, {timestamps:true})
// timestamps:true ^^^ for updated and created at times

module.exports.Product = mongoose.model("Product", ProductSchema)