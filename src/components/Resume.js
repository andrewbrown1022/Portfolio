import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ResumeMainColLeft = styled(Col)`
  padding-top: 1.5em;
  //   color: #22294a;
`;

const ResumeMainColRight = styled(Col)`
  padding-top: 1.5em;
  //   color: #22294a;
`;

const ResumeMainRow = styled(Row)`
  padding-bottom: 4em;
`;

const ResumeHeaderBlock = styled.div``;

const ResumeExperienceBlock = styled.div``;

const ResumeSkillsRow = styled(Row)``;

const ResumeSkillsColLeft = styled(Col)``;
const ResumeSkillsColMiddle = styled(Col)``;
const ResumeSkillsColRight = styled(Col)``;

const Resume = () => {
  return (
    <Container id="resume" fluid>
      <ResumeMainRow>
        <ResumeMainColLeft xs="12" md="6">
          <ResumeExperienceBlock>
            <ResumeHeaderBlock>
              <h1>Work Experience</h1>
              <hr className="ResumeUnderline"></hr>
            </ResumeHeaderBlock>
          </ResumeExperienceBlock>

          <ResumeExperienceBlock>
            <ResumeHeaderBlock>
              <h1>Leadership and Service</h1>
              <hr className="ResumeUnderline"></hr>
            </ResumeHeaderBlock>
          </ResumeExperienceBlock>
        </ResumeMainColLeft>
        <ResumeMainColRight xs="12" md="6">
          <ResumeExperienceBlock>
            <ResumeHeaderBlock>
              <h1>Research Experience</h1>
              <hr className="ResumeUnderline"></hr>
            </ResumeHeaderBlock>
          </ResumeExperienceBlock>

          <ResumeExperienceBlock>
            <ResumeHeaderBlock>
              <h1>Publications</h1>
              <hr className="ResumeUnderline"></hr>
            </ResumeHeaderBlock>
          </ResumeExperienceBlock>
        </ResumeMainColRight>
      </ResumeMainRow>
      <ResumeSkillsRow>
        <ResumeSkillsColLeft></ResumeSkillsColLeft>
        <ResumeSkillsColMiddle></ResumeSkillsColMiddle>
        <ResumeSkillsColRight></ResumeSkillsColRight>
      </ResumeSkillsRow>
    </Container>
  );
};

export default Resume;
