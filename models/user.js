const mongoose = require('mongoose')

const User = new mongoose.Schema({
    facebookID: String,
    username: String,
    password: String,
    age: Number,
    friends: [],
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', User);