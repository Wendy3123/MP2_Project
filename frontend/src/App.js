import "./App.css";
import Form from "./pages/Form";
import { Route, Routes } from "react-router-dom";
import Post from "./pages/Post";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import IndividualPost from "./pages/IndividualPost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AllPosts" element={<Post />} />
        <Route path="/CreateAPost" element={<Form />} />
        <Route path="/AllPosts/:id" element={<IndividualPost />} />
      </Routes>
    </div>
  );
}

export default App;
