import React, { Component } from "react";
import Facebook from "./Components/facebook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Facebook API Login using React</h1>
        <Facebook />
      </div>
    );
  }
}

export default App;
