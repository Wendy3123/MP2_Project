import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import { Context } from "../context";

const formFields = [
  {
    id: "author",
    type: "text",
    label: "Author",
  },
  {
    id: "img_URL",
    type: "URL",
    label: "Image URL",
  },
  {
    id: "caption",
    type: "text",
    label: "Caption",
  },
];

function Form() {
  const { form, setForm, savePostsToDatabase, isEdit } = useContext(Context);
  return (
    <div>
      <h1 className="h1Tag">
        <img src="./LOGO.png" alt="brand logo" className="logo"></img>
        TWITTER
      </h1>
      <NavBar />
      <div className="OutterFormBox">
        <form onSubmit={savePostsToDatabase}>
          <h1>
            <img src="./LOGO.png" alt="brand logo" className="logo"></img>
            {isEdit ? "Edit A Post" : "Create A Post"}
          </h1>
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
            {/* change type to submit for button submit so it also renders the submit function when clicked */}
            <button className="formbtn">
              {isEdit ? "Add Edit" : "Create New Post"}
            </button>
            <button className="formbtncancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
