import "./App.css";
import Form from "./pages/Form";
import { Route, Routes } from "react-router-dom";
import Post from "./pages/Post";
import { useState } from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

const initialState = {
  author: "",
  img_URL: "https://placekitten.com/300/300",
  caption: "",
};

function App() {
  const [form, setForm] = useState(initialState);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AllPosts" element={<Post />} />
        <Route
          path="/CreateAPost"
          element={<Form form={form} setForm={setForm} />}
        />
      </Routes>
    </div>
  );
}

export default App;

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
