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
export default function () {
  return (
    <div>
      <h2>The future</h2>
      <HomeButton>Home</HomeButton>
    </div>
  );
}
