import React from "react";
import "./Landingpage.css";

export default function Landingpage() {
  return (
    <div>
      <div className="Welcome_statement">
        <h2>Welcome to the eden application</h2>
        <h4>Designed and created by Dwaylan A. Applewhite</h4>
      </div>
      <h2>About</h2>
      <p>
        This app is a reflection of the current zietgiest and culmination of
        intrests spanning between multiple generations. From Baby boomers to Gen
        Z, horticulture is an activity that has withstood the test of time, and
        with the eden app users can find information on their favorite plants in
        the palm of their hand.
      </p>
      <h2>Features</h2>
      <p>
        Each plant within our eden database will have information pertaining to
        its lifecyle, toxicity, and location. Our goal is to recognize
        indegenous plants by state while making users aware of posionus and
        invasive species
      </p>
    </div>
  );
}
