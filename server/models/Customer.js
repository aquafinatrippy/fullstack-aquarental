const mongoose = require("../db");

const Customer = mongoose.model(
    "Customer",
    mongoose.Schema({
        name: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 255
        },
        isGold: {
            type: Boolean,
            default: false
        },
        phone: {
            type: Number,
            required: true,
            minLength: 8,
            maxLength: 50
        }
    })
);

module.exports = Customer;
