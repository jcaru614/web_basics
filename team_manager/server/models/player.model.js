const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'must be at least 3 characters long']
    },
    position: {
        type: String,
        minlength: [3, 'must be at least 3 characters long']

    }
}, { timestamps: true });

mongoose.model('Player', PlayerSchema);