const mongoose = require('mongoose');
const Schema = mongoose.Schema

const blogSchema = new mongoose.Schema({
    blog_name: String,
    category: {type: Schema.Types.String, ref: 'category'},
    image: String,
    description: String,
    author: {type: Schema.Types.ObjectId, ref: 'user'}
})

module.exports = mongoose.model('blog', blogSchema)