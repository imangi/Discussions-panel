const mongoose = require("mongoose");

const replySchema = new mongoose.Schema({
  userId: {
    type: Number,
  },
  commentId: {
    type: Number,
  },
  reply: {
    type: String,
  },
});

module.exports = mongoose.model("Reply", replySchema);
