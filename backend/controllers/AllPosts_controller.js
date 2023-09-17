const express = require("express");
const mongoose = require("mongoose");
const post = require("../models/post");
const AllPosts = express.Router();

// get all posts
AllPosts.get("/", async (req, res) => {
  try {
    const getAllPost = await post.find();
    res.status(200).json(getAllPost); //status 200 means successful status code and the json converts it to readable language from the post.js in model
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
});

//get single post--> get method
AllPosts.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const getSinglePost = await post.findById(id);
    res.status(200).json(getSinglePost);
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
});

//create a single product ---> post method
AllPosts.post("/", async (req, res) => {
  const { author, img_URL, caption } = req.body;
  //create new product by passing in the same arguments as above
  const newlyCreatedPost = new post({ author, img_URL, caption });

  try {
    await newlyCreatedPost.save(); //save the new product we just created
    res.status(201).json(newlyCreatedPost); //status 201 means save was successful so we can now pass the newlypost in
  } catch (error) {
    console.log(error.messsage);
    res.send(409).json({ errorInfo: error.message }); //409 means request cant be processed while 404 means cant be found
  }
});

//update a specific post --> put method
AllPosts.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { author, img_URL, caption } = req.body; //the new values we want to update based on this

  try {
    //check whether the id is valid by comparing it to the mongoose auto assigned ObjectId to every data we create in mongodb database
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .send(`No post is found with${id}! Please try again🤪`);
    }
    //now update the values above
    //This updatedPost is an existing postwe are only changing the values of the author, img_URL, caption
    //however the id stays the same as u can see we add _id like how its named in the mongoDB and equal to id as our req.param
    const updatedPost = { author, img_URL, caption, _id: id };

    await post.findByIdAndUpdate(id, updatedPost, { new: true }); //we pass the new is true bc it is an updated post from previous post
    res.json({ message: "Post is UPDATED successfully" });
  } catch (error) {
    console.log(error.messsage);
    res.send(500).json({ errorInfo: error.message }); //500 means the server encountered an unexpected condition that prevented it from fulfilling the request
  }
});

//delete a specific product --> delete method
AllPosts.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      //same as above check if id is valid match to our database
      return res
        .status(404)
        .send(`No post is found with${id}! Please try again🤪`);
    }
    await post.findByIdAndDelete(id); //find and delete id
    res.json({ message: "Post is deleted successfully" }); //send a message for successful completion
  } catch (error) {
    res.send(500).json({ errorInfo: error.message }); //500 means the server encountered an unexpected condition that prevented it from fulfilling the request
  }
});

module.exports = AllPosts;
