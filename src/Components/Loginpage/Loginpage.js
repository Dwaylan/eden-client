import React, { Component } from "react";
// import { Redirect } from "react-router";
// import React, { useState } from "react";
import "./Loginpage.css";
// import { useHistory } from "react-router-dom";

class Loginpage extends Component {
  state = {
    username: "",
    Email: "",
    Password: "",
  };
  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    e.preventDefault();
    // set cookie here
    // set loggedIn = true and max-age = 60*1000 (one minute)
    document.cookie = "loggedIn=true;max-age=480*1000";
    window.location.replace("/Nursery");
    window.alert("You are now entering eden");
  };

  render() {
    return (
      <div className="parent_container">
        <form className="form_container" onSubmit={this.login}>
          <div>
            <label className="label">Username</label>
            <input type="text" className="input"></input>
          </div>
          <div>
            <br />
          </div>
          <div>
            <label className="label">Email</label>
            <input type="email" className="input"></input>
          </div>
          <div>
            <br />
          </div>
          <div>
            <label className="label">Password</label>
            <input type="password" className="input"></input>
          </div>
          <div>
            <br />
          </div>
          <button type="submit" className="Button">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Loginpage;
