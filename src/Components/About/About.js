import React from "react";
import "./About.css";
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    console.log("Home button was clicked");
    history.push("/");
  }
  return (
    <button type="button" onClick={handleClick}>
      {" "}
      Home{" "}
    </button>
  );
}
export default function About() {
  return (
    <div className="container">
      <h2>About</h2>
      <p>
        This app is a reflection of the current zietgiest and culmination of
        intrests spanning between multiple generations. From Baby boomers to Gen
        Z, horticulture is an activity that has withstood the test of time, and
        with the eden app users can find information on their favorite plants in
        the palm of their hand.
      </p>
      <p>
        The Eden app currently renders information on the state flowers for each
        of the 50 states.
      </p>
      <div className="Row_container">
        <img
          className="Row_image"
          src={"../images/Row_redacted.png"}
          alt="rows"
        />
      </div>
      <HomeButton>Home</HomeButton>
    </div>
  );
}
