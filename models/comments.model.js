const mongoose = require('mongoose')
var Schema = mongoose.Schema

const commentsSchema = new Schema({
    id: Number,
    body: String,
    email: String,
    name: String,
    postId: Number
})

module.export = mongoose.model('Comments', commentsSchema)