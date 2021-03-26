import React, { Component } from "react";

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
      </li>
    );
  }
}

export default Nursery;
