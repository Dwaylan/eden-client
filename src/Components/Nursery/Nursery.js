import React, { Component } from "react";
// import { useHistory } from "react-router-dom";
import "./Nursery.css";

class Nursery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plants: [],
      search: "",
    };
  }
  componentDidMount() {
    const plantApi = "https://eden-rest-api.vercel.app/plants";

    fetch(plantApi)
      .then((res) => res.json())
      .then((data) => this.setState({ plants: data }));
  }

  // onchange = e =>{
  //   this.setState({ search: e.target.value})
  // }

  render() {
    console.log("payload detected", this.state.plants);
    return (
      <div className="plants_container">
        {this.state.plants &&
          this.state.plants.map((plant) => {
            return (
              <div className="plants">
                <h2>{plant.Common_name}</h2>
                <h4>{plant.Scientific_name}</h4>
                <img
                  className="plant_images"
                  src={plant.image}
                  alt={plant.Common_name}
                  crossOrigin="anonymous"
                ></img>
                <h4>State: {plant.State}</h4>
                <h4> Toxicity: {plant.Toxicity}</h4>
                <h4>Life Cycle: {plant.Life_cycle}</h4>
              </div>
            );
          })}
      </div>
    );
  }
}

// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     console.log("Home button was clicked");
//     history.push("/");
//     window.alert("You are now leaving eden");
//   }
//   return (
//     <button type="button" onClick={handleClick}>
//       {" "}
//       Home{" "}
//     </button>
//   );
// }

export default Nursery;
