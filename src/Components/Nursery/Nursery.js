import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import "./Nursery.css";

class Nursery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plants: [],
    };
  }
  componentDidMount() {
    const plantApi = "https://eden-rest-api.vercel.app/plants";

    fetch(plantApi)
      .then((res) => res.json())
      .then((data) => this.setState({ plants: data }));
  }

  render() {
    console.log("payload detected", this.state.plants);
    return (
      <ul className="plants">
        {this.state.plants &&
          this.state.plants.map((plant) => {
            return (
              <li>
                <div>
                  <h2> Name:{plant.Common_name}</h2>
                  <h4>Scientific name:{plant.Scientific_name}</h4>
                  <h4>State: {plant.State}</h4>
                  <h4> Toxicity: {plant.Toxicity}</h4>
                  <h4>Life Cycle: {plant.Life_cycle}</h4>
                </div>
                <img
                  src={plant.image}
                  alt={plant.Common_name}
                  crossOrigin="use-credentials"
                ></img>
              </li>
            );
          })}
      </ul>
    );
  }
}

function LogoutButton() {
  let history = useHistory();

  function handleClick() {
    console.log("Log out was clicked");
    history.push("/");
    window.alert("You are now leaving eden");
  }
  return (
    <button type="button" onClick={handleClick}>
      {" "}
      Logout{" "}
    </button>
  );
}

export default Nursery;
