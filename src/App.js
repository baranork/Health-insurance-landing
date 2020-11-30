import React from "react";
import "./App.css";
import Button from "./Button.js";
import NavBar from "./NavBar.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="page-title left side">
            <div className="text-block">
              <div className="title">Healthcare is about people</div>
              <div className="subtitle">
                The most effective and easy to use platform that connects
                doctors with patients all over the world
              </div>
              <Button />
            </div>
          </div>
          <div className="right side"></div>
        </div>
      </div>
    );
  }
}

export default App;
