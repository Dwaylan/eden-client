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
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
    };
  }

  componentDidMount() {
    const plantApi =
      "https://trefle.io/api/v1/plants?token=2Hw0j0YkP8-Ofc33sQ_gVnULzQv_Zw78Ci7dYl78N8E";

    fetch(plantApi)
      .then((res) => res.json())
      .then((data) => this.setState({ plants: data }));
    console.log("payload detected", this.data);
  }

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
