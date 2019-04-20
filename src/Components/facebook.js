import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import "../App.css";
class Facebook extends Component {
  state = {
    isLogin: false,
    userid: "",
    name: "",
    email: "",
    pic: ""
  };
  componentClicked = () => console.log("Clicked!!");

  responseFacebook = res => {
    this.setState({
      isLogin: true,
      userid: res.userID,
      name: res.name,
      email: res.email,
      pic: res.picture.data.url
    });
    console.log(res);
  };
  render() {
    let fbconnect;

    if (this.state.isLogin) {
      fbconnect = (
        <div className="card">
          <div className="card-header" />
          <div className="card-body">
            <img src={this.state.pic} alt="profile" />
            <div className="name">{this.state.name}</div>
            <codee>{this.state.email}</codee>
            <div className="description">
              Front-end developer, ice hockey goalie, not a father
            </div>
            <div className="location">Washington DC</div>
          </div>
        </div>
      );
    } else {
      fbconnect = (
        <div className="btn">
          <p>Click to see what can this button do !</p>
          <FacebookLogin
            appId="2297031330510811"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        </div>
      );
    }
    return <div>{fbconnect}</div>;
  }
}
export default Facebook;
