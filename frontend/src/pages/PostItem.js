import React, { useContext } from "react";
import { Context } from "../context";

function PostItem({ item }) {
  const { IndividualPostInfoById, deleteSinglePost, editSinglePost } =
    useContext(Context);
  const { author, img_URL, caption, _id } = item; //we pass _id in here to so we can access the current id from mongodb
  return (
    <div className="PostContainer">
      <div className="PostBox">
        <img src={img_URL} alt=" pic of staff" className="Postimage"></img>
        <h3>{author}</h3>
        <p className="Postpara">{caption}</p>
        <div>
          <button
            onClick={() => {
              IndividualPostInfoById(_id);
            }}
            className="PostItemBtnLeft"
          >
            See Post
          </button>
          <button
            className="PostItemBtnMid"
            onClick={() => {
              editSinglePost(item);
            }}
          >
            Edit
          </button>
          <button
            className="PostItemBtnRight"
            onClick={() => {
              deleteSinglePost(_id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
