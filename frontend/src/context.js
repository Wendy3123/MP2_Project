import { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext(null);

const initialState = {
  author: "",
  img_URL: "https://placekitten.com/300/300",
  caption: "",
};

const GlobalState = ({ children }) => {
  const [form, setForm] = useState(initialState);
  const [posts, setPosts] = useState([]); //this will be empty array bc it will be all our post we will get getting
  const [isPostSavedSuccessfully, setIsPostSavedSuccessfully] = useState(false); //default value set to false first
  const navigate = useNavigate();

  async function savePostsToDatabase(e) {
    e.preventDefault(); //prevent page from refreshing on any event happening
    const apiResponse = await fetch("http://localhost:3000/AllPosts", {
      //enter port for backend server so our ex localhost:3000 not localhost:3001
      method: "POST", //add the method post to create a single post
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form), //change our form from unreadable to readable
    });

    const result = await apiResponse.json(); //should be able to see results in mongodb
    console.log(result);

    if (result) {
      //if result above is successful
      setIsPostSavedSuccessfully(true);
    }
  }

  useEffect(() => {
    if (isPostSavedSuccessfully) {
      setForm(initialState); //reset whole form back to initial state if isPostSavedSuccessfully === true
      navigate("/AllPosts"); //navigate back to this page after
      setIsPostSavedSuccessfully(false); //set it bacl to false so u afe able to other pages other than /AllPosts
    }
  }, [isPostSavedSuccessfully, navigate]);

  useEffect(() => {
    async function getListOfPosts() {
      const apiRes = await fetch("http://localhost:3000/AllPosts");
      const result = await apiRes.json();
      console.log(result);
      if (result && result.length > 0) {
        //if result is tru and result.length is greater than 0
        setPosts(result);
      }
    }
    getListOfPosts();
  }, [setPosts]); //the second argument is [] which menas on pageload it loads once and thats it

  return (
    <Context.Provider
      value={{
        form,
        setForm,
        posts,
        setPosts,
        isPostSavedSuccessfully,
        setIsPostSavedSuccessfully,
        savePostsToDatabase,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalState;
