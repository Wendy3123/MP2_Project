import React from "react";

function PostItem({ item }) {
  const { author, img_URL, caption } = item;
  return (
    <div className="PostContainer">
      <div className="PostBox">
        <img src={img_URL} alt=" pic of staff" className="Postimage"></img>
        <h3>{author}</h3>
        <p className="Postpara">{caption}</p>
        <button>edit</button>
      </div>
    </div>
  );
}

export default PostItem;
