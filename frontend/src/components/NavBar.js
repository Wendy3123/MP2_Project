import React from "react";
import { Link } from "react-router-dom";

const listStyle = {
  listStyle: "none",
  fontSize: "18px",
  display: "flex",
  gap: "8vw",
  justifyContent: "space-evenly",
  backgroundColor: "white",
  margin: "auto",
  padding: "15px 0 15px 0",
};

export default function NavBar() {
  return (
    <nav>
      <ul style={listStyle}>
        <Link to={"/"}>Home</Link>
        <Link to={"/AboutUs"}>About Us</Link>
        <Link to={"/AllPosts"}>All Posts</Link>
        <Link to={"/CreateAPost"}>Create a Post</Link>
      </ul>
    </nav>
  );
}

// function Navbar() {
//   return (
//     <Stack>
//       <Box>
//         <Link to={"/"}>Home</Link>
//         <Link to={"/AllPosts"}>All Posts</Link>
//       </Box>
//     </Stack>
//   );
// }

// export default Navbar;
