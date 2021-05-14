import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./imagecarousel.css";
import { Carousel } from "react-responsive-carousel";

export default class ImageCarousel extends Component {
  render() {
    return (
      <Carousel className="Carousel">
        <div>
          <img src="../Images/eschscholtzie.jpeg" alt="flower1"></img>
          <p className="legend">Welcome to Eden</p>
        </div>
        <div>
          <img src="../Images/goldenrod.jpeg" alt="flower2"></img>
        </div>
      </Carousel>
    );
  }
}
