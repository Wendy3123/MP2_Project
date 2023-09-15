import React, { useState } from "react";
import NavBar from "../components/NavBar";

const formFields = [
  {
    id: "author",
    type: "text",
    label: "Author",
  },
  {
    id: "img_URL",
    type: "text",
    label: "Image URL",
  },
  {
    id: "caption",
    type: "text",
    label: "Caption",
  },
];

function Form({ form, setForm }) {
  return (
    <div>
      <h1 className="h1Tag">
        <img src="./LOGO.png" alt="brand logo" className="logo"></img>Create A
        Post
      </h1>
      <NavBar />
      <form>
        {formFields.map((field) => (
          <div className="form1">
            <div>
              <label className="form1label">{field.label}</label>
            </div>
            <div>
              <input
                name={field.id}
                id={field.id}
                type={field.type}
                className="form1input"
                value={form[field.id]} //assign the value of the input now to the current form default value
                onChange={
                  (e) => setForm({ ...form, [e.target.name]: e.target.value }) //...form takes the values we alrdy have in the form and updates the e.target.name to e.target.value
                }
              ></input>
            </div>
          </div>
        ))}
        <div className="CreatePostBtn">
          <button>Create New Post</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
