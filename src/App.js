import React from "react";
import Nav from "./Components/Nav";
import Router from "./Router/Router";
import Footer from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
