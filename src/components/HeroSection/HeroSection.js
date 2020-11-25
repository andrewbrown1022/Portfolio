import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import logo from "../../images/logo.png";

const StyledCol = styled(Col)``;

const LandingBackground = styled(Row)`
  background-color: #363b53;
`;

const HeroSection = () => {
  return (
    <Container fluid>
      <LandingBackground className="vh-100 align-items-center">
        <StyledCol id="heroMainColumn" className="text-center" lg={12}>
          <img id="logo" src={logo}></img>

          <h1 className="landingHead">
            Hello, I'm <mark id="nameLandingPage">Andrew Brown</mark>.
          </h1>
          <h1 className="landingHead">
            Computer scientist and aspiring physician.
          </h1>
          <p className="landingText">
            Machine Learning | Data Science | Medicine | Cloud Compute |
            Healthcare
          </p>
        </StyledCol>
      </LandingBackground>
    </Container>
  );
};

export default HeroSection;
