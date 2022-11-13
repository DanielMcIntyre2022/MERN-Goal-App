const mongoose = require('mongoose');

const connectToDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(console.log('connected to DB!'));
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


module.exports = connectToDB;