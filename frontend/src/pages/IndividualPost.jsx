import React, { useContext } from "react";
import { Context } from "../context";
import NavBar from "../components/NavBar";

function IndividualPost() {
  const { individualPostInfo } = useContext(Context);
  const { author, img_URL, caption } = individualPostInfo;

  console.log(individualPostInfo);
  return (
    <div>
      <h1 className="h1Tag">
        <img src="./LOGO.png" alt="brand logo" className="logo"></img>Create A
        Post
      </h1>
      <NavBar />

      <div className="PostContainer">
        <div className="PostBox">
          <img src={img_URL} alt=" pic of staff" className="Postimage"></img>
          <h3>{author}</h3>
          <p className="Postpara">{caption}</p>
        </div>
      </div>
    </div>
  );
}

export default IndividualPost;
