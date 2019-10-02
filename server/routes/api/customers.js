const Customer = require("../../models/Customer");
const router = require("express").Router();

router.get("/", async (req, res) => {
    const customers = await Customer.find().sort("name");
    res.send(customers);
});

router.post("/", async (req, res) => {
    try {
        let customer = new Customer({
            name: req.body.name,
            isGold: req.body.isGold,
            phone: req.body.phone
        });
        customer = await customer.save();
        res.send(customer);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                isGold: req.body.isGold,
                phone: req.body.phone
            },
            { new: true }
        );
        res.send(customer);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const customer = await Customer.findByIdAndRemove(req.params.id);
        res.send(customer);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        res.send(customer);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
