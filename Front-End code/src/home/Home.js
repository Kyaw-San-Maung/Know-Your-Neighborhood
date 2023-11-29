import React, { Component } from "react";
import Footer from '../app/Footer';
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="first-container">
          <div className="btn">
            <h1>Welcome To the Know Your Neighborhood</h1>
            <p>
              You may find all kinds of information about{" "}
              <span style={{ color: "#33BBC5", fontWeight: "600" }}>
                the area on our website,
              </span>
              <br />
              including details about nearby{" "}
              <span style={{ color: "#33BBC5", fontWeight: "600" }}>
                components, crucial phone numbers, and ressident resources.
              </span>
            </p>
            <a href="/signup">
              <button className="homeBtn">Get Started</button>
            </a>
          </div>
        </div>
        <div className="feature-container">
          <div className=" feature feature-1">
            <h1>Directory of local business</h1>
            <i class="fa-solid fa-house-laptop"></i>
            <p>Residents may find it helpful to consult a list of nearby <br/>
              establishments such as restaurants, shops and service providers.
            </p>
          </div>
          <div className=" feature feature-2">
            <h1>New To The Neighborhood</h1>
            <i class="fa-solid fa-people-group"></i>
            <p>A section providing resources and information to help local newcomers<br/>
              settle in could be useful <br/>information on relevant ordinances,<br/> transportation and other included
            </p>
          </div>
          <div className=" feature feature-3">
            <h1>User-Generated Content</h1>
            <i class="fa-solid fa-layer-group"></i>
            <p>On the website, allowing users to post their own images, <br />
              flims and reviews of nearby establishments of community </p>
          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}

export default Home;
