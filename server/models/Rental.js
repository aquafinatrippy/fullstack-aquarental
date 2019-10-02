const mongoose = require("../db");

const Rental = mongoose.model(
    "Rental",
    mongoose.Schema({
        customer: {
            type: new mongoose.Schema({
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
            }),
            required: true
        },
        movie: {
            type: new mongoose.Schema({
                title: {
                    type: String,
                    required: true,
                    trim: true,
                    minLength: 5,
                    maxLenght: 255
                },
                genre: {
                    type: genreScheme,
                    required: true
                },
                numberInStock: {
                    type: Number,
                    required: true,
                    min: 0,
                    max: 255
                },
                dailyRentalRate: {
                    type: Number,
                    required: true,
                    min: 0,
                    max: 255
                }
            }),
            required: true
        },
        dateOut: {
            type: Date,
            required: true,
            default: Date.now
        },
        dateReturned: {
            type: Date
        },
        rentalFee: {
            type: Number,
            min: 0
        }
    })
);

module.exports = Rental;
