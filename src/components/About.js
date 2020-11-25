import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import avatar from "../images/CroppedAvatar.jpg";
import microscope from "../images/microscope.svg";
import collaboration from "../images/collaboration.svg";
import agile from "../images/agile.svg";

const AboutHeader = styled(Col)`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #22294a;
  color: #22294a;
  margin-top: 2em;
  padding: 0px 2em;
`;

const AboutMainRow = styled(Row)`
  margin-top: 2em;
  padding: 2em 0;
  margin-bottom: 4em;
`;

const AboutLeftCol = styled(Col)`
  //   background-color: red;
  padding: 20px;
  @media (min-width: 1200px) {
    padding: 20px 8em;
  }
  @media (min-width: 1920px) {
    padding: 20px 13%;
  }
`;
const AboutRightCol = styled(Col)`
  @media (min-width: 1200px) {
  }
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: 1200px) {
    width: 300px;
    height: 300px;
  }
`;

const AboutRightListItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  @media (min-width: 1200px) {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 20px;
    margin-top: 10px;
    flex-flow: row nowrap;
  }
`;

const About = () => {
  return (
    <Container id="about" fluid className="">
      <Row id="aboutHeaderRow" className=" justify-content-center">
        <AboutHeader
          xs="auto"
          s="auto"
          md="auto"
          xl="auto"
          className="text-center "
        >
          <h1>About</h1>
        </AboutHeader>
      </Row>
      <AboutMainRow className="justify-content-center">
        <AboutLeftCol
          xs="12"
          s="12"
          md="12"
          lg="12"
          xl="5"
          className="text-center"
        >
          <Img src={avatar}></Img>
          <h1 id="aboutLeftHead"> Who am I?</h1>
          <p id="aboutLeftBody">
            A relentless innovator who leverages a multidisciplinary background
            to make the world a better place.
          </p>
        </AboutLeftCol>
        <AboutRightCol
          xs="12"
          s="12"
          md="12"
          lg="12"
          xl="7"
          className="text-center text-xl-left"
        >
          <AboutRightListItem>
            <img className="aboutRightList" src={microscope}></img>
            <div className="aboutRightList">
              <h1 className="aboutRightListInner">Interdisciplinary</h1>
              <p className="aboutRightListInner aboutRightListInnerP">
                Leveraging expertise in tech and healthcare to improve patient
                outcomes.
              </p>
            </div>
          </AboutRightListItem>
          <AboutRightListItem>
            <img className="aboutRightList" src={collaboration}></img>
            <div className="aboutRightList">
              <h1 className="aboutRightListInner">Collaborative</h1>
              <p className="aboutRightListInner aboutRightListInnerP">
                Ruthlessly collaborates with people from all backgrounds
                ensuring solutions work for a diverse audience.
              </p>
            </div>
          </AboutRightListItem>
          <AboutRightListItem>
            <img className="aboutRightList" src={agile}></img>
            <div className="aboutRightList">
              <h1 className="aboutRightListInner">Fast-paced</h1>
              <p className="aboutRightListInner aboutRightListInnerP">
                Emphasizes failing fast, working using agile principles with an
                emphasis on innovation rather than stagnation.
              </p>
            </div>
          </AboutRightListItem>
        </AboutRightCol>
      </AboutMainRow>
    </Container>
  );
};

export default About;
