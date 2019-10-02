const express = require("express");
const genres = require("./routes/api/genres");
const bodyParser = require("body-parser");
const cors = require("cors");
const customers = require("./routes/api/customers");
const movies = require("./routes/api/movies");
const rentals = require("./routes/api/rentals");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 3000;

app.use("/api", genres);
app.use("/api", customers);
app.use("/api", movies);
app.use("/api", rentals);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
