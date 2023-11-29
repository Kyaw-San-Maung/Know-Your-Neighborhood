import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./AppHeader.css";

class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="container">
          <div className="app-branding">
            <Link to="/" className="app-title">
              Know Your Neighbourhood
            </Link>
          </div>
          <div className="app-options">
            <nav className="app-nav">
              {this.props.authenticated ? (
                <ul>
                  <li>
                    <NavLink to="/profile">PROFILE</NavLink>
                  </li>
                  <li>
                    <NavLink to="/stores">STORES</NavLink>
                  </li>
                  <li>
                    <NavLink to="/addStore">Add Store</NavLink>
                  </li>
                  <li>
                  <button className="logout" >
                      <a onClick={this.props.onLogout} style={{ color: "white" }}>LOGOUT</a>
                      </button>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <NavLink to="/">HOME</NavLink>
                  </li>

                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/terms">Terms and Condition</NavLink>
                  </li>

                  <li>
                    <button className="signbtn" >
                      <NavLink to="/signup" >SIGNUP</NavLink>
                    </button>
                  </li>
                  <li>
                    <button className="logbtn" >
                      <NavLink to="/login" >LOGIN</NavLink>
                    </button>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
