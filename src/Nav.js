import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "./images/logo.png";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">
          <img src={logo} alt="" height="125px" className="logo" />
        </Link>

        <div className="nav_items">
          <Link to="/about" className="comfortaa nav_item">
            Who's Michelle
          </Link>
          <Link to="/experience" className="comfortaa nav_item">
            What's She Done
          </Link>
          <Link to="/contact" className="comfortaa nav_item">
            Ok, Where Can I Find Her
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
