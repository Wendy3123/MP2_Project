const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  img_URL: { type: String, default: "https://placekitten.com/300/300" },
  caption: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("post", postSchema);

// //const post: The variable we are saving our model to.
// //mongoose.model: A Mongoose method that creates a model for us based on the arguments we pass it.
// //posts: The first argument we passed is the name of the collection we want to connect this model to.
// //postSchema: The second argument we passed is the schema we want our model to use.
// const post = mongoose.model("posts", postSchema);
