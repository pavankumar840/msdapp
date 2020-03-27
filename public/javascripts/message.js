const mongoose = require('mongoose');

const message = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    senderid:{
        type: String,
        required: true
    },
    receiverid:{
        type: String,
        required: true
    },
    sentat: {
        type:  Date,
        default: Date.now
    }
})

module.exports = Message = mongoose.model('message', message);