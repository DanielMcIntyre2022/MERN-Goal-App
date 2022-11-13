const mongoose = require('mongoose');

const goalModel = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please enter a text feild']
    }
});

module.exports = mongoose.model('goals', goalModel);