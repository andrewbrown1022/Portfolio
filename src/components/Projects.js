import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import mlPoster from "../images/ML_Poster.svg";
import Button from "react-bootstrap/Button";
import temp_alg_viz from "../images/temp_viz_tool.png";
import LabBuddy from "../images/labbuddy.svg";
const ProjectsHeaderRow = styled(Row)`
  padding-top: 3em;
`;

const CardButton = styled(Button)`
  background-color: #22294a;
`;

const ProjectsHeader = styled(Col)`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #22294a;
  color: #22294a;
  //   margin-top: 2em;
  padding: 0px 2em;
  margin-bottom: 3em;
`;

const ProjectsMainCol = styled(Col)`
  padding-top: 1.5em;
  //   color: #22294a;
`;

const ProjectsMainRow = styled(Row)`
  padding-bottom: 4em;
`;

const Projects = () => {
  return (
    <Container id="projects" fluid>
      <ProjectsHeaderRow className="justify-content-center">
        <ProjectsHeader
          xs="auto"
          s="auto"
          md="auto"
          xl="auto"
          className="text-center"
        >
          <h1>Projects</h1>
        </ProjectsHeader>
      </ProjectsHeaderRow>
      <ProjectsMainRow className="justify-content-center align-content-center">
        <ProjectsMainCol xs="12" xl="9">
          <CardDeck>
            <Card className=" text-center">
              <Card.Img variant="top" src={mlPoster} />
              <Card.Body>
                <Card.Title>
                  <h4>Predicting Hospital Length of Stay</h4>
                  <h6>Deep Learning for An Overcrowded System</h6>
                </Card.Title>
                <Card.Text>
                  In this project I used a deep learning model to predict
                  hospital length of stay using inpatient data from New York
                  Public Hospitals.
                </Card.Text>
                <CardButton>View Full Screen</CardButton>
              </Card.Body>
            </Card>
            <Card className=" text-center">
              <Card.Img variant="top" src={temp_alg_viz} />
              <Card.Body>
                <Card.Title>
                  <h4>Path Finding Algorithm Vizualizer </h4>
                </Card.Title>
                <Card.Text>
                  An interactive web based tool that allows users to experiment
                  with various path finding algorithms.
                </Card.Text>
                <CardButton>View Full Screen</CardButton>
              </Card.Body>
            </Card>
            <Card className=" text-center">
              <Card.Img variant="top" src={LabBuddy} />
              <Card.Body>
                <Card.Title>
                  <h4>Lab Buddy</h4>
                  <h6>Mobile Lab Assistant</h6>
                </Card.Title>
                <Card.Text>
                  A hands free dictation tool that allows researchers to record
                  experimental context while their hands are occupied. Made in
                  collaboration with Merck & Co. and AWS ProService Team.
                </Card.Text>
                <CardButton>View Full Screen</CardButton>
              </Card.Body>
            </Card>
          </CardDeck>
        </ProjectsMainCol>
      </ProjectsMainRow>
    </Container>
  );
};

export default Projects;
