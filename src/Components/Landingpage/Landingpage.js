import React from "react";
import "./Landingpage.css";
import "../Carousel/Imagecarousel";
import ImageCarousel from "../Carousel/Imagecarousel";

export default function Landingpage() {
  return (
    <div className="container">
      <div className="Welcome_statement">
        <h2>Welcome to the eden application</h2>
        <h4>Designed and created by Dwaylan A. Applewhite</h4>
      </div>
      <ImageCarousel></ImageCarousel>
    </div>
  );
}
