import React from "react";
import { useHistory } from "react-router-dom";
import "./Features.css";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    console.log("Home button was clicked");
    history.push("/");
  }
  return (
    <button type="button" className="Home" onClick={handleClick}>
      {" "}
      Home{" "}
    </button>
  );
}

export default function Features() {
  return (
    <div className="container">
      <h2>Features</h2>
      <p>
        Each plant within our eden database will have information pertaining to
        its lifecyle, toxicity, and location. Our goal is to recognize
        indegenous plants by state while making users aware of posionus and
        invasive species
      </p>
      <div className="flower_container">
        <img
          className="single_flower"
          src={"../images/Single_flower_cropped.png"}
          alt="single flower"
        />
      </div>
      <HomeButton>Home</HomeButton>
    </div>
  );
}
