import React from "react";

const formFields = [
  {
    id: "author",
    type: "text",
    label: "author",
  },
  {
    id: "img_URL",
    type: "text",
    label: "img_URL",
  },
  {
    id: "caption",
    type: "text",
    label: "caption",
  },
];

function Form() {
  return (
    <div>
      <h1>Create A Post</h1>
      <form></form>
    </div>
  );
}

export default Form;
