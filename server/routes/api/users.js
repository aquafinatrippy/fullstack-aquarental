const router = require("express").Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");

router.get("/users", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/user", async (req, res) => {
    let user = await User.findOne({email: req.body.email})
    if(user){
        return res.status(400).send('this user already exist')
    }
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
            return res.send(err)
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

module.exports = router;
