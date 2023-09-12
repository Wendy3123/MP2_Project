const express = require("express");
const posts = express.Router();
const post = require("../models/post");
// const postModel = require("../models/post");

// INDEX
posts.get("/", (req, res) => {
  // res.send(postModel);
  post.find().then((foundPost) => {
    console.log(foundPost);
  });
});

module.exports = posts;
