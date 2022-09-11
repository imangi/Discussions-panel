const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  commentid: {
    type: String,
    required: true,
    unique: true,
  },
  comment: {
    type: String,
  },
  upvotes: {
    type: Number,
  },
});

module.exports = mongoose.model("comment", commentsSchema);
