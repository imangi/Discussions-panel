const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  comments: {
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
    repies: [],
  },
});

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  comments: [commentsSchema],
});

module.exports = mongoose.model("User", userSchema);
