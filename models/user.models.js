const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: Number,
    email: String,
    phone: String,
    userName: String
})

module.export = mongoose.model('User', userSchema)