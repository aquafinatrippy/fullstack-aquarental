const router = require("express").Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");

router.get("/me", auth, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user._id });
        res.send(user);
    } catch (error) {
        res.status(400).send(`Couldnt get current user: ${error}`);
    }
});

router.get("/users", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/register", async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send("this user already exist");
    }
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.send(err);
        }
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });
        newUser
            .save()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send(err);
            });
    });
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error({ error: "No user found" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error({ error: "Passwords dont match" });
        }
        const token = user.generateToken();
        res.header("Authorization", token).send(user);
    } catch (error) {
        res.status(400).send(`Login error: ${error}`);
    }
});

module.exports = router;
