const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  author: { type: String, required: true },
  img_URL: { type: String, default: "https://placekitten.com/300/300" },
  caption: {
    type: String,
    required: true,
  },
});

const post = mongoose.model("post", postSchema);
module.exports = post;

// //const post: The variable we are saving our model to.
// //mongoose.model: A Mongoose method that creates a model for us based on the arguments we pass it.
// //posts: The first argument we passed is the name of the collection we want to connect this model to.
// //postSchema: The second argument we passed is the schema we want our model to use.
// const post = mongoose.model("posts", postSchema);

// module.exports = [
//   {
//     name: "Wendy",
//     caption: "hi",
//     image:
//       "https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
//   },
//   {
//     name: "Cam",
//     caption: "hi",
//     image:
//       "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
//   },
//   {
//     name: "John",
//     caption: "hi",
//     image:
//       "https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
//   },
//   {
//     name: "Princess",
//     caption: "hi",
//     image:
//       "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
//   },
// ];
