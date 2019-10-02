const express = require("express");
const genres = require("./routes/api/genres");
const bodyParser = require("body-parser");
const cors = require("cors");
const customers = require("./routes/api/customers");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 3000;

app.use("/api", genres);
app.use("/api/customers", customers);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
