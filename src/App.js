import React, { Component } from "react";
import "./styles/App.css";
import NavBar from "./components/Nav.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
