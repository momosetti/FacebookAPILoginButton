import React, { Component } from "react";
import "../App.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header" />
        <div className="card-body">
          <img
            src="http://chriswiggins.co/img/profile_avatar.jpg"
            alt="profile picture"
          />
          <div className="name">Chris Wiggins</div>
          <div className="description">
            Front-end developer, ice hockey goalie, not a father
          </div>
          <div className="location">Washington DC</div>
        </div>
      </div>
    );
  }
}

export default Card;
