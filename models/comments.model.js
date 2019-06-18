const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    id: Number,
    body: String,
    email: String,
    name: String,
    postId: Number
})

module.export = mongoose.model('Comments', commentsSchema)