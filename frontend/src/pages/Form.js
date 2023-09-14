import React from "react";
import NavBar from "../components/NavBar";

// const formFields = [
//   {
//     id: "author",
//     type: "text",
//     label: "author",
//   },
//   {
//     id: "img_URL",
//     type: "text",
//     label: "img_URL",
//   },
//   {
//     id: "caption",
//     type: "text",
//     label: "caption",
//   },
// ];

function Form() {
  return (
    <div>
      <h1 className="h1Tag">
        <img src="./LOGO.png" alt="brand logo" className="logo"></img>Create A
        Post
      </h1>
      <NavBar />
      <form></form>
    </div>
  );
}

export default Form;
