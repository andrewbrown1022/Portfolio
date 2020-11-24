import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { Link } from "react-scroll";
const Styles = styled.div`
  .navbar {
    background-color: #22294a;
  }
  #home {
    color: #00c7fd;
  }

  .navbar-nav .nav-link {
    color: white;

    &:hover {
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
          <Nav.Link id="home" className="px-4" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="px-4" href="#link">
            About
          </Nav.Link>
          <Nav.Link className="px-4" href="#home">
            Projects
          </Nav.Link>
          <Nav.Link className="px-4" href="#link">
            Resume
          </Nav.Link>
          <Nav.Link className="px-4" href="#home">
            Photography
          </Nav.Link>
          <Nav.Link className="px-4" href="#link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavBar;
