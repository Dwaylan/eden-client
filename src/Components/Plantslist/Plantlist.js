import React, { Component } from "./node_modules/react";
import Nursery from "../Nursery";

const fetch = require("node-fetch");

class Plantlist extends Component {
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
    console.log("payload detected", this.data);
  }

  render() {
    return (
      <ul>
        {this.state.plants &&
          this.state.plants.map((plant) => {
            return (
              <Nursery
                Name={plant.Common_name}
                Scientific_name={plant.Scientific_name}
                State={plant.State}
                Toxicity={plant.Toxicity}
                Life_cycle={plant.Life_cycle}
                img={plant.image_url}
              />
            );
          })}
      </ul>
    );
  }
}

export default Plantlist;
