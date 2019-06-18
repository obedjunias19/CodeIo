const mongoose = require('mongoose')
var Schema = mongoose.Schema

const userSchema = new Schema({
    id: Number,
    email: String,
    phone: String,
    userName: String
})

module.export = mongoose.model('Users', userSchema)