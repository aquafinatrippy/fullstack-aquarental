const mongoose = require("../db");

mongoose.set('useCreateIndex', true);
let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 512,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    }
});

let User = mongoose.model("User", userSchema);

module.exports = User;
