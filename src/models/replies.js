const mongoose = require("mongoose");

const replySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  commentId: {
    type: String,
    required: true,
  },
  replyId: {
    type: String,
    required: true,
  },
  reply: {
    type: String,
  },
});

module.exports = mongoose.model("Reply", replySchema);
