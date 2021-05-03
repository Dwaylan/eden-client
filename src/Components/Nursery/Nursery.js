import React, { Component } from "react";
import { useHistory } from "react-router-dom";

class Nursery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <div>
          <h2> Name:{this.props.common_name}</h2>
          <h4>Scientific name:{this.props.scientific_name}</h4>
          <h4>State: {this.props.State}</h4>
          <h4> Toxicity: {this.props.Toxicity}</h4>
          <h4>Life Cycle: {this.props.Life_cycle}</h4>
        </div>
        <img src={this.props.image} alt="plant"></img>
        <HomeButton />
      </li>
    );
  }
}

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    console.log("home button was clicked");
    history.push("/");
  }
  return (
    <button type="button" onClick={handleClick}>
      {" "}
      Logout{" "}
    </button>
  );
}

export default Nursery;
