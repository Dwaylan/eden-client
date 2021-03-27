import React from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function NurseryButton() {
  let history = useHistory;

  function handleClick() {
    history.push("/nursery");
  }
  return (
    <button type="button" onClick={handleClick}>
      {" "}
      nursery{" "}
    </button>
  );
}

export default function Nav() {
  return (
    <div className="Nav">
      <h1>Nav</h1>
      <NurseryButton />
    </div>
  );
}
