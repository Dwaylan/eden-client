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
    <button type="button" className="Button" onClick={handleClick}>
      {" "}
      Nursery{" "}
    </button>
  );
}

function AboutButton() {
  let history = useHistory();

  function handleClick() {
    console.log("about button was clicked");
    history.push("/about");
  }
  return (
    <button type="button" className="Button" onClick={handleClick}>
      {" "}
      About{" "}
    </button>
  );
}
function FeaturesButton() {
  let history = useHistory();

  function handleClick() {
    console.log("Features button was clicked");
    history.push("/features");
  }
  return (
    <button type="button" className="Button" onClick={handleClick}>
      {" "}
      Features{" "}
    </button>
  );
}
function FutureButton() {
  let history = useHistory();

  function handleClick() {
    console.log("Features button was clicked");
    history.push("/future");
  }
  return (
    <button type="button" className="Button" onClick={handleClick}>
      {" "}
      The Future{" "}
    </button>
  );
}

export default function Nav() {
  return (
    <div className="Nav">
      <NurseryButton />
      <AboutButton />
      <FeaturesButton />
      <FutureButton />
    </div>
  );
}
