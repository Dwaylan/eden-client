import React from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function NurseryButton() {
  let history = useHistory();

  function handleClick() {
    console.log("nursery button was clicked");
    history.push("/nursery");
  }
  return (
    <button type="button" onClick={handleClick}>
      {" "}
      nursery{" "}
    </button>
  );
}

function LoginButton() {
  let history = useHistory();

  function handleClick() {
    console.log("login button was clicked");
    history.push("/login");
  }
  return (
    <button type="button" onClick={handleClick}>
      {" "}
      Login{" "}
    </button>
  );
}

export default function Nav() {
  return (
    <div className="Nav">
      <h1>Welcome to the eden app</h1>
      <NurseryButton />
      <LoginButton />
    </div>
  );
}
