const mongoose = require('mongoose')

const AuthorSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The author needs a name"],
        minlength: [3, "The author's name must be at least 3 characters long"]
    }
}, {timestamps: true})

module.exports.Author = mongoose.model('Author', AuthorSchema)