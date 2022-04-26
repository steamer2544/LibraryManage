const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/test")


const librarySchema = new mongoose.Schema({
    bookName: String,
    category: String,
    issued: Number,
    available: Number,
    total: Number,
    isbn: String,
    author: String
});

const Library = new mongoose.model("Library", librarySchema);

module.exports = Library;