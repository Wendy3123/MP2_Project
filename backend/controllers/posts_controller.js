const express = require("express");
const posts = express.Router();
const postModel = require("../models/post");

// INDEX
posts.get("/", (req, res) => {
  res.send(postModel);
});

module.exports = posts;
