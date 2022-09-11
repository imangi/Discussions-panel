const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("./post/save", (req, res) => {
  let newUser = new User(req.body);

  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "posts saving is succeeded",
    });
  });
});

module.exports = router;
