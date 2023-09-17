import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import { Context } from "../context";
import PostItem from "./PostItem";

function Post() {
  const { posts, setPosts } = useContext(Context);
  //on page load call api to get list of post

  console.log(posts);
  return (
    <div>
      <h1 className="h1Tag">
        <img src="./LOGO.png" alt="brand logo" className="logo"></img>View Posts
      </h1>
      <NavBar />
      {posts && posts.length > 0
        ? posts.map((item) => <PostItem item={item} />)
        : null}
    </div>
  );
}

export default Post;
