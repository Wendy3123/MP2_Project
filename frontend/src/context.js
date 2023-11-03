import { useState, useEffect } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
  const [individualPostInfo, setIndividualPostInfo] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [currentPostDetailId, setCurrentPostDetailId] = useState(null);
  const [isPostDetailDataFetching, setIsPostDetailDataFetching] =
    useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  async function savePostsToDatabase(e) {
    e.preventDefault(); //prevent page from refreshing on any event happening
    const apiResponse = await fetch(
      isEdit
        ? `http://localhost:3000/AllPosts/${form._id}`
        : "http://localhost:3000/AllPosts",
      {
        //enter port for backend server so our ex localhost:3000 not localhost:3001
        method: isEdit ? "PUT" : "POST", //add the method post to create a single post
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form), //change our form from unreadable to readable
      }
    );

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

  async function getListOfPosts() {
    const apiRes = await fetch("http://localhost:3000/AllPosts");
    const result = await apiRes.json();
    console.log(result);
    if (result && result.length > 0) {
      //if result is tru and result.length is greater than 0
      setPosts(result);
    }
  }

  useEffect(() => {
    if (location.pathname === "/AllPosts") {
      setIsPostSavedSuccessfully(false);
      getListOfPosts();
      setForm(initialState);
      setIsEdit(false);
    }
  }, [setPosts, location]); //the second argument is [] which menas on pageload it loads once and thats it

  async function IndividualPostInfoById(getCurrentId) {
    const apiRes = await fetch(
      `http://localhost:3000/AllPosts/${getCurrentId}`
    );
    const result = await apiRes.json();
    console.log(result);

    if (result) {
      setIsPostDetailDataFetching(false); //if result==true
      setIndividualPostInfo(result);
      navigate(`/AllPosts/${getCurrentId}`);
    }
  }

  async function deleteSinglePost(getCurrentId) {
    const apiRes = await fetch(
      `http://localhost:3000/AllPosts/${getCurrentId}`,
      {
        method: "DELETE",
      }
    );
    console.log(apiRes);
    if (apiRes.ok) {
      //if api.Res.ok is true call the posts api to get updated list of posts
      getListOfPosts(); //we made this function earlier to fetch from the new post after delete from mongodb
    }
  }

  function editSinglePost(getCurrentItemData) {
    console.log(getCurrentItemData);
    setForm(getCurrentItemData);
    navigate("/CreateAPost"); //we are using the createAPost page again to render the edit page
    setIsEdit(true); //true to edit page because we clicked the edit button now we can use this true value to display the edit button and title
  }

  useEffect(() => {
    if (currentPostDetailId !== null) {
      IndividualPostInfoById(currentPostDetailId);
    }
  }, [currentPostDetailId]);

  console.log(currentPostDetailId);

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
        IndividualPostInfoById,
        individualPostInfo,
        deleteSinglePost,
        editSinglePost,
        isEdit,
        isPostDetailDataFetching,
        setCurrentPostDetailId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalState;
