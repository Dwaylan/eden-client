import React from "react";
import "./Loginpage.css";

export default function Loginpage() {
  return (
    <div>
      <form className="form_container">
        <label>Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Password</label>
        <input type="text"></input>
        <button>Login</button>
        <button>Sign up</button>
      </form>
    </div>
  );
}
