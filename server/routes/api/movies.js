const Movie = require("../../models/Movie");
const Genre = require("../../models/Genre");
const router = require("express").Router();

router.get("/movies", async (req, res) => {
    try {
        const movies = await Movie.find({}).sort("name");
        res.send(movies);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/movies", async (req, res) => {
    try {
        const genre = await Genre.findById(req.body.genreId);
        if (!genre) {
            return res.status(400).send(`No genre found`);
        }
        const movie = new Movie({
            title: req.body.title,
            genre: {
                _id: genre._id,
                name: genre.name
            },
            numberInStock: req.body.numberInStock,
            dailyRentalRate: req.body.dailyRentalRate
        });
        await movie.save();
        res.send(movie);
    } catch (err) {
        res.status(400).send(`error adding movie, ${err}`);
    }
});

router.delete("/movies/:id", async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        res.send(movie);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.put("/movies/:id", async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                genre: {
                    _id: genre._id,
                    name: genre.name
                },
                numberInStock: req.body.numberInStock,
                dailyRentalRate: req.body.dailyRentalRate
            },
            { new: true }
        );
        res.send(movie);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
