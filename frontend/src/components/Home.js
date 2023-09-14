import React from "react";
import NavBar from "./NavBar";

function Home({ headerStyle }) {
  return (
    <div>
      <h1 style={headerStyle}>
        <img src="./LOGO.png" alt="brand logo" className="logo"></img>
        WELCOME TO TWITTER
      </h1>
      <NavBar />
      <h2>To invent, you need a good imagination and a pile of junk!</h2>
      <h2>Start here today😆</h2>
      <img
        src="./frontPagepic.png"
        alt="front page pic"
        className="frontPagepic"
      ></img>
    </div>
  );
}

export default Home;
