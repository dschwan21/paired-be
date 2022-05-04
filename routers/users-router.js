const express = require("express");

const Users = require('../models/users-model')
const router = express();

router.route("/list").get((req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err))
});

router.route("/tester").get( (req, res) => {
    // res.send(JSON.stringify(req.oidc.user));
    res.send('hello welcome to the tester endpoint')
});

router.route("/:id")
.put(async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const userExists = await Users.find({id}).first();
    if (!userExists) {
        res.status(404).json({message: 'Sorry, that user does not exist'})
    } else {
        const updated = await Users.update({id}, changes);
        res.status(200).json({updated});
    }
})
.delete(async (req, res) => {
    const { id } = req.params;
    const deletedUser = await Users.remove({id});
    if (deletedUser) {
        res.status(200).json({message: "The user has been succesfully deleted"})
    } else {
        res.status(404).json({message: "That user does not exist!"});
    }
})
.get(async (req, res) => {
    const { id } = req.params;
    const user = await Users.find({id});

    if (user){
        res.status(200).json({user})
    } else {
        res.status(404).json({message: "could not locate that user"})
    }
})



module.exports = router;