import "./App.css";
import Form from "./pages/Form";
import { Route, Routes } from "react-router-dom";
import Post from "./pages/Post";
// import { useState } from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

const headerStyle = {
  fontSize: "52px",
  background: "linear-gradient(27deg, #7928CA, #FF0080)",
  margin: "auto",
  padding: "10px 0 10px 0",
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home headerStyle={headerStyle} />} />
        <Route
          path="/AboutUs"
          element={<AboutUs headerStyle={headerStyle} />}
        />
        <Route path="/AllPosts" element={<Post />} />
        <Route path="/AllPosts" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
// const initialState = {
//   author: "",
//   img_URL: "https://placekitten.com/300/300",
//   caption: "",
// };

// function App() {
//   const [form, setForm] = useState(initialState);
//   return (
//     <Stack>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<PostForm form={form} setForm={setForm} />} />
//         <Route path="/AllPosts" element={<Post />} />
//       </Routes>
//     </Stack>
//   );
// }

// export default App;
