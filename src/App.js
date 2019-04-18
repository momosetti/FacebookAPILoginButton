import React, { Component } from 'react';
import './App.css';
import Facebook from './Components/facebook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>hello</h1>
          <Facebook />
        </header>
      </div>
    );
  }
}

export default App;
