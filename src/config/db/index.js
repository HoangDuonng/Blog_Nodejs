const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nguuyen_demon');
        console.log('Connect succesfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = {connect};
