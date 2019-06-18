const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    id: Number,
    body: String,
    title: String,
    userId: Number
})

module.export = mongoose.model('Posts', postsSchema)