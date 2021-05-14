import React from "react";
import "./Landingpage.css";
import "../Carousel/Imagecarousel";
import ImageCarousel from "../Carousel/Imagecarousel";

export default function Landingpage() {
  return (
    <div className="container">
      <div className="Welcome_statement"></div>
      <ImageCarousel></ImageCarousel>
    </div>
  );
}
