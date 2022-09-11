const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  userId: {
    type: Number,
  },
  commentid: {
    type: Number,
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
