const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'Author name must be at least 3 characters long']
    },
    quote: {
        type: String,
        minlength: [3, 'Qoute must be at least 3 characters long']

    }
}, { timestamps: true });

mongoose.model('Author', AuthorSchema);