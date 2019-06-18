const mongoose = require('mongoose')
var Schema = mongoose.Schema

const postsSchema = new Schema({
    id: Number,
    body: String,
    title: String,
    userId: Number
})

module.export = mongoose.model('Posts', postsSchema)