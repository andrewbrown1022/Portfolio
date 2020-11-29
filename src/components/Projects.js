import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const ProjectsHeaderRow = styled(Row)`
  padding-top: 3em;
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
  padding-top: 2em;
`;

const ProjectsMainRow = styled(Row)``;

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
        <ProjectsMainCol>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </ProjectsMainCol>
      </ProjectsMainRow>
    </Container>
  );
};

export default Projects;
