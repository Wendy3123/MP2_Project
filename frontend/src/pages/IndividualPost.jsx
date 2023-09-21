import React, { useContext, useEffect } from "react";
import { Context } from "../context";
import NavBar from "../components/NavBar";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";

function IndividualPost() {
  const {
    individualPostInfo,
    isPostDetailDataFetching,
    setCurrentPostDetailId,
  } = useContext(Context);

  const params = useParams();
  console.log(params);

  const { id } = params;

  useEffect(() => {
    if (id !== "") setCurrentPostDetailId(id);
  }, [id, setCurrentPostDetailId]);

  if (isPostDetailDataFetching) {
    return <CircularProgress />;
  }
  const { author, img_URL, caption } = individualPostInfo;

  console.log(individualPostInfo);
  return (
    <div>
      <h1 className="h1Tag">TWITTER</h1>
      <NavBar />
      <h1>POST #{id}</h1>
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
