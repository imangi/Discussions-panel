const express = require("express");
const Comment = require("../models/comments");
const User = require("../models/user");
const Reply = require("../models/replies");

/*router.post("/api/comment",*/

const commentRoute = async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
};

const replyRoute = async (req, res) => {
  const newReply = new Reply(req.body);
  try {
    const savedReply = await newReply.save();
    res.status(200).json(savedReply);
  } catch (err) {
    res.status(500).json(err);
  }
};

const userRoute = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  commentRoute: commentRoute,
  replyRoute: replyRoute,
  userRoute: userRoute,
};
