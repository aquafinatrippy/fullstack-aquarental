const router = require("express").Router();
const GenreType = require("../../models/Genre");

router.get("/genre", (req, res) => {
    GenreType.find({})
        .then(found => {
            res.send(found);
        })
        .catch(err => {
            res.send(err);
        });
});

router.post("/genre", (req, res) => {
    const addGenre = new GenreType({
        genre: req.body.genre
    });
    addGenre
        .save()
        .then(added => {
            res.send(added);
        })
        .catch(err => {
            res.status(400).send("failed to add");
        });
});

module.exports = router;
