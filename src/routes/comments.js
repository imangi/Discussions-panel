const express = require("express");
const Comment = require("../models/comments");

const router = express.Router();

router.post("/api/comment", async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
