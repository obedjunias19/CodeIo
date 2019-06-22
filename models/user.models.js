const mongoose = require('mongoose')
var Schema = mongoose.Schema

const userSchema = new Schema({
    _id: Number,
    email: String,
    phone: String,
    username: String
})

module.export = mongoose.model('Users', userSchema)