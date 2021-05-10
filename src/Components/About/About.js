import React from "react";
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
    <div>
      <h2>About</h2>
      <p>
        This app is a reflection of the current zietgiest and culmination of
        intrests spanning between multiple generations. From Baby boomers to Gen
        Z, horticulture is an activity that has withstood the test of time, and
        with the eden app users can find information on their favorite plants in
        the palm of their hand.
      </p>
      <HomeButton>Home</HomeButton>
    </div>
  );
}
