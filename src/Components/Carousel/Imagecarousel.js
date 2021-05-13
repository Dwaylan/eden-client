import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

export default class ImageCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <p>slide 1</p>
        </div>
        <div>
          <p>slide 2</p>
        </div>
        <div>
          <p>slide 3</p>
        </div>
      </Carousel>
    );
  }
}
