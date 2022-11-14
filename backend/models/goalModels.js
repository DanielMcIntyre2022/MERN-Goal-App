const mongoose = require('mongoose');

const goalModel = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please enter a text feild']
    }
});

module.exports = mongoose.model('goals', goalModel);