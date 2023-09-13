// Require needed modules.
const express = require("express");
const mongoose = require("mongoose");
const post = require("./models/post.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// Initialize the app object.
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to TWITTER");
});



//POST ROUTE
const postsController = require("./controllers/posts_controller.js");
app.use("/posts", postsController);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("App is connected to database");
    // Listen for connections.
    app.listen(PORT, () => console.log(`🏃🏼‍♀️Running on PORT ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });

// Create a homepage route.
