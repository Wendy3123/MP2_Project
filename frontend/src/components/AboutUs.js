import React from "react";
import NavBar from "./NavBar";

function AboutUs() {
  return (
    <div>
      <h1 className="h1Tag">
        <img src="./LOGO.png" alt="brand logo" className="logo"></img>Meet the
        creators 👋🏼
      </h1>
      <NavBar />

      <div>
        <div className="CBox">
          <img
            src="https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
            alt=" pic of staff"
            className="Cimage"
          ></img>
          <h3>Wendy Wang</h3>
          <p className="Cpara">
            Looking for someone with initiative and who is willing to step up to
            the plate look no futher then her{" "}
          </p>
        </div>

        <div className="CBox">
          <img
            src="https://th.bing.com/th/id/OIF.6NaRbdglMBfik6aCT6ECxw?pid=ImgDet&rs=1"
            alt=" pic of staff"
            className="Cimage"
          ></img>
          <h3>John Lema</h3>
          <p className="Cpara">This is placeholder</p>
        </div>

        <div className="CBox">
          <img
            src="https://www.real-fix.com/wp-content/uploads/2016/10/SWNS_CUTE_DOG_04.jpg"
            alt=" pic of staff"
            className="Cimage"
          ></img>
          <h3>Mike Guzman</h3>
          <p className="Cpara">this is placeholder</p>
        </div>

        <div className="CBox">
          <img
            src="https://th.bing.com/th/id/R.2bf04a9aaf3d9624a0aebc249bbf550e?rik=PMR2L6J2USnQxg&pid=ImgRaw&r=0"
            alt=" pic of staff"
            className="Cimage"
          ></img>
          <h3>Cameron Mency</h3>
          <p className="Cpara">This is placeholder</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
