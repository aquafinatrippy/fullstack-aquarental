const mongoose = require("mongoose");
const ENV = require('dotenv').config()

const dbpath = process.env.DB_STRING;

mongoose.Promise = global.Promise;

mongoose
    .connect(dbpath, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: true
    })
    .then(res => {
        console.log("Succesfuly connected to db");
    })
    .catch(err => {
        console.log("error connecting to database");
    });

module.exports = mongoose;
