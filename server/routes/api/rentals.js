const Rental = require("../../models/Rental");
const router = require("express").Router();
const Customer = require("../../models/Customer");
const Movie = require("../../models/Movie");
const Fawn = require("fawn");

router.get("/rentals", async (req, res) => {
    try {
        let rentals = await Rental.find({}).sort("-dateOut");
        res.send(rentals);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/rental", async (req, res) => {
    try {
        const customer = await Customer.findById(req.body.customerId);
        if (!customer) {
            return res.status(400).send("Invalid user");
        }
        const movie = await Movie.findById(req.body.movieId);
        if (movie.numberInStock === 0) {
            return res.status(400).send("movie out of stock");
        }
        let rental = new Rental({
            customer: {
                _id: customer._id,
                name: customer.name,
                phone: customer.phone
            },
            movie: {
                _id: movie._id,
                title: movie.title,
                dailyRentalRate: movie.dailyRentalRate
            }
        });
        new Fawn.Task()
            .save("rentals", rental)
            .update(
                "movies",
                { _id: movie._id },
                { $inc: { numberInStock: -1 } }
            )
            .run();
        res.send(rental);
    } catch (error) {
        res.status(400).send(error);
    }
});
router.get("/rental/:id", async (req, res) => {
    try {
        const rental = await Rental.findById(req.params.id);
        res.send(rental);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
