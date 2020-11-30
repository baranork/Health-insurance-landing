import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul id="nav">
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">OUR DOCTORS</a>
          </li>
          <li>
            <a href="#">PROVIDERS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
