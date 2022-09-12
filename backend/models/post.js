const mongoose = require("mongoose");

const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  usersDisliked: { type: [String] },
  usersLiked: { type: [String] },
});

module.exports = mongoose.model("Sauce", sauceSchema);
