const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/api/user", async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
