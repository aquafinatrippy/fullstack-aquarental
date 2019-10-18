const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).send("access denied");
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("invalid token");
    }
};
