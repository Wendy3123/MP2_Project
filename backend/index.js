// Require needed modules.
const express = require("express");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// Initialize the app object.
const app = express();

// Create a homepage route.
app.get("/", function (req, res) {
  res.send("Welcome to TWITTER");
});

//POST ROUTE
const postsController = require("./controllers/posts_controller.js");
app.use("/posts", postsController);

// Listen for connections.
app.listen(PORT, () => console.log(`🏃🏼‍♀️Running on PORT ${PORT}`));
