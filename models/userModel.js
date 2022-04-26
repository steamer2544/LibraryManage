const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/test")


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    issuedBooks: [{
        bookName: String,
    }],
    numberOfIssuedBooks: Number,
    signedIn: Boolean
});

const User = new mongoose.model("User", userSchema);

module.exports = User;