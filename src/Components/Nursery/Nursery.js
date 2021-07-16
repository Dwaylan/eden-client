import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import "./Nursery.css";

class Nursery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plants: [],
      search: "",
      searchValue: props.value,
      click: false,
    };
    this.onClick = this.onClick.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const plantApi = "https://eden-rest-api.vercel.app/plants";

    fetch(plantApi)
      .then((res) => res.json())
      .then((data) => this.setState({ plants: data }));
  }

  // handleChange(e) {
  //   this.setState({ search: e.target.value });
  //   console.log("now queuing");
  // }
  // handleSearchChange(e) {
  //   e.preventDefault();
  //   this.setState({ searchValue: e.target.value });
  //   console.log(this.state.searchValue);
  // }

  onClick() {
    this.setState((prevState) => ({ click: !prevState.click }));
  }

  render() {
    // console.log("Card was clicked:", this.state.click);
    return (
      <div className="Nursery_parent_container">
        <div className="search_bar">
          <HomeButton className="Home" />
        </div>
        <div className="plants_container" onClick={this.onClick}>
          {this.state.plants &&
            this.state.plants.map((plant) => {
              if (this.state.click === true) {
                return (
                  <div className="plants">
                    <h2>{plant.Common_name}</h2>
                    <h4>{plant.Scientific_name}</h4>

                    <h4> Toxicity: {plant.Toxicity}</h4>
                    <h4>Life Cycle: {plant.Life_cycle}</h4>
                    <p>{plant.Blog}</p>
                  </div>
                );
              } else {
                return (
                  <div className="plants">
                    <h2>{plant.Common_name}</h2>
                    <h4>{plant.Scientific_name}</h4>
                    <h4>State: {plant.State}</h4>
                    <img
                      className="plant_images"
                      src={plant.image}
                      alt={plant.Common_name}
                      crossOrigin="anonymous"
                    ></img>
                  </div>
                );
              }
            })}
        </div>
      </div>
    );
  }
}

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    console.log("Home button was clicked");
    history.push("/");
    window.alert("You are now leaving eden");
  }
  return (
    <button type="button" className="Home" onClick={handleClick}>
      {" "}
      Home{" "}
    </button>
  );
}

export default Nursery;
