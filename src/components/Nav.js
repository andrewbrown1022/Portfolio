import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
const Styles = styled.div`
  .navbar {
    background-color: #22294a;
    margin-bottom: 30px;
  }
  #home {
    color: #00c7fd;
  }

  .navbar-nav .nav-link {
    color: white;
    font-size: 1.5vh;

    &:hover {
      transition: all 0.2s ease-in-out;
      color: #00c7fd;
    }
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar sticky="top" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Link to="heroSection" spy={true} smooth={true} duration={500}>
            <Nav.Link id="home" className="px-4">
              Home
            </Nav.Link>
          </Link>

          <Link to="about" spy={true} smooth={true} duration={500}>
            <Nav.Link className="px-4">About</Nav.Link>
          </Link>

          <Link to="projects" spy={true} smooth={true} duration={500}>
            <Nav.Link className="px-4">Projects</Nav.Link>
          </Link>

          <Nav.Link
            className="px-4"
            to="resume"
            spy={true}
            smooth={true}
            duration={500}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            className="px-4"
            to="photography"
            spy={true}
            smooth={true}
            duration={500}
          >
            Photography
          </Nav.Link>
          <Nav.Link
            className="px-4"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavBar;
