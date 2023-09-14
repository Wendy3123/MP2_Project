// Require needed modules.
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const post = require("./models/post.js");
const AllPostsController = require("./controllers/AllPosts_controller.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// Initialize the app object to create app
const app = express();
app.use(bodyparser.json({ extended: true, limit: "20mb" }));
app.use(bodyparser.urlencoded({ extended: true, limit: "20mb" }));
app.use(cors());
app.use("/AllPosts", AllPostsController); //to visit this page go to localhost:3000/AllPosts

// Create a homepage route.
app.get("/", function (req, res) {
  res.send("Welcome to TWITTER");
});

app.get("/AboutUs", function (req, res) {
  //MAKE SURE TO COME BACK TO CHANGE THIS ABOUTUS PAGE****
  res.send("ABOUT US TO BE CONTINUED");
});

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
