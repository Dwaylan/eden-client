import React, { Component } from "react";
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    console.log("home button was clicked");
    history.push("/");
  }
  return (
    <button type="button" onClick={handleClick}>
      {" "}
      Home{" "}
    </button>
  );
}

class Nursery extends Component {
  render() {
    return (
      <li>
        <div>
          <h2> Common name:{this.props.common_name}</h2>
          <img src={this.props.image} alt="plant"></img>
          <h3>Scientific name:{this.props.scientific_name}</h3>
          <h3> Slug: {this.props.slug}</h3>
        </div>
        <HomeButton />
      </li>
    );
  }
}

export default Nursery;
