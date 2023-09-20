import React from "react";
import NavBar from "./NavBar";

function AboutUs() {
  return (
    <div>
      <h1 className="h1Tag">
        <img src="./LOGO.png" alt="brand logo" className="logo"></img>TWITTER
      </h1>
      <NavBar />

      <div className="aboutusBox">
        <h1>Meet the creators 👋🏼</h1>
        <div>
          <h3>
            Twitter is an American online photo-sharing platform headquartered
            in NY, founded by four amazing developers – in June 2023
          </h3>
        </div>
        <div className="CBox">
          <img
            src="https://img.freepik.com/free-vector/young-woman-pink-dress-smiling_1450-140.jpg"
            alt=" pic of staff"
            className="Cimage"
          ></img>
          <h3>Wendy Wang</h3>
          <p className="Cpara">
            Wendy Wang is a accomplished full stack developer with over 10 years
            of experience. Today, she is a faculty member at Harvard, Tufts and
            Boston University where she teaches advance algorithms and prepares
            students for graduation.
          </p>
          <link href="https://github.com/Wendy3123"></link>
        </div>

        <div className="CBox">
          <img
            src="https://clipground.com/images/boy-with-glasses-clipart-1.jpg"
            alt=" pic of staff"
            className="Cimage"
          ></img>
          <h3>John Lema</h3>
          <p className="Cpara">
            John Lema is a seasoned database analyst who work for such notable
            companys such as, Apple, spotify and is now taking charge at a
            seinor position at Amazon.
          </p>
        </div>

        <div className="CBox">
          <img
            src="https://th.bing.com/th/id/R.604043513ece65599eaed1851f1239d3?rik=JVt5%2bP7EFXTFJw&riu=http%3a%2f%2fclipart-library.com%2fnewimages%2fboy-clipart-2.jpg&ehk=mVKygMz28vPLbOte8OiFNAxKmRhWWn0WDeYd4Im0dd4%3d&risl=&pid=ImgRaw&r=0"
            alt=" pic of staff"
            className="Cimage"
          ></img>
          <h3>Mike Guzman</h3>
          <p className="Cpara">
            Mike Guzman is a established backend developer with 15 years of
            experience for being a part of the well know luxury brand Hermes but
            now is the head of infrastructure at Ferrari.
          </p>
        </div>

        <div className="CBox">
          <img
            src="https://i.graphicmama.com/uploads/2019/5/5cf0d8e42e3d5-african-american-school-girl-cartoon-vector-character-1.png"
            alt=" pic of staff"
            className="Cimage"
          ></img>
          <h3>Cameron Mency</h3>
          <p className="Cpara">
            Cameron Mency is detecated frontend developer whos work with
            goverment institutions 20 years but now works with vairous non
            profit orginzations around the world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
