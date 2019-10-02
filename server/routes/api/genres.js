const router = require("express").Router();
const GenreType = require("../../models/Genre");

router.get("/genres", async (req, res) => {
    try {
        const allGenres = await GenreType.find({});
        res.send(allGenres);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/genres", (req, res) => {
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

router.put("/genres/:id", async (req, res) => {
    try {
        const genres = await GenreType.findByIdAndUpdate(req.params.id, {
            name: req.body.name
        });
        res.send(genres);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete("/genres/:id", async (req, res) => {
    try {
        const genres = await GenreType.findByIdAndRemove(req.params.id);
        res.send(genres);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
