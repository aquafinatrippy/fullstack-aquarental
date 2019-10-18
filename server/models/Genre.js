const mongoose = require("../db");

let genreScheme = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    }
});

let Genre = mongoose.model("Genre", genreScheme);

//module.exports = genreScheme;
exports.genreScheme = genreScheme;
module.exports = Genre;
