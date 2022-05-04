const express = require('express')

const Users = require('../models/users-model')

const router = express()

  // Adding users on signup 
router.route("/").post(async (req, res) => {
    if (!req.body.email) {
      return res.status(400).json({
        error: `Error during ${req.method} at ${req.originalUrl}: email is required.`
      });
    }
    // Check if email of user exists to decide whether to create new user
    const currentUser = await Users.find({ email: req.body.email }).first();
    if (currentUser) {
      // Return user info
      const userInfo = { currentUser };
      return res.status(200).json({ userInfo });
    } else {
      // Add user to database if email does not exist
      const newUser = await Users.add(req.body);
      const userInfo = { newUser };
      res.status(201).json({ userInfo });
    }
  });


  module.exports = router;