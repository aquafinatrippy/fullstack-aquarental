const mongoose = require("../db");

const Movie = mongoose.model(
    "Movies",
    mongoose.Schema({
        title: {
            type: String,
            required: true,
            trim: true,
            minLength: 5,
            maxLenght: 255
        },
        genre: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 50
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
    })
);

module.exports = Movie;
