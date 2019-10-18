const mongoose = require("../db");
const jwt = require("jsonwebtoken");

mongoose.set("useCreateIndex", true);
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
    },
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.methods.generateToken = function() {
    const token = jwt.sign(
        { _id: this._id, admin: this.admin },
        process.env.SECRET_KEY
    );
    return token;
};

let User = mongoose.model("User", userSchema);

module.exports = User;
