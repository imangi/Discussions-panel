const express = require("express");
const Reply = require("../models/replies");

const router = express.Router();

router.post("/api/reply", async (req, res) => {
  const newReply = new Reply(req.body);
  try {
    const savedReply = await newReply.save();
    res.status(200).json(savedReply);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
