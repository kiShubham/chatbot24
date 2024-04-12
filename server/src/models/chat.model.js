const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    answer: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Chats = mongoose.model("Chats", chatSchema);
module.exports = Chats;
