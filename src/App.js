import React, { Component } from "react";
import "./styles/App.css";
import NavBar from "./components/Nav.js";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import { Link, animateScroll as scroll } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSection />
        <NavBar />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
