import React, { Component } from "./node_modules/react";
import Nursery from "../Nursery/Nursery";

const fetch = require("node-fetch");

class Plantlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plants: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://trefle.io/api/v1/plants?token=2Hw0j0YkP8-Ofc33sQ_gVnULzQv_Zw78Ci7dYl78N8E"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ plants: data });
      });
    console.log(this.state.plants);
  }

  render() {
    return (
      <ul>
        {this.state.plants &&
          this.state.plants.map((plant) => {
            return (
              <Nursery
                common_name={plant.common_name}
                scientific_name={plant.scientific_name}
                slug={plant.slug}
                link={plant.link}
                img={plant.image_url}
              />
            );
          })}
      </ul>
    );
  }
}

export default Plantlist;