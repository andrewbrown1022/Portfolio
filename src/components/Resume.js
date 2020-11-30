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
  padding-top: 3em;
`;

const ResumeMainBlock = styled.div`
  padding-bottom: 1em;
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
      <ResumeMainRow className="justify-content-center">
        <ResumeMainColLeft xs="12" md="5">
          <ResumeExperienceBlock>
            <ResumeHeaderBlock>
              <h1>Work Experience</h1>
              <hr className="ResumeUnderline"></hr>
            </ResumeHeaderBlock>
            <ResumeMainBlock>
              <h3 className="m-0">Merck & Co., Inc.</h3>
              <p>Emerging Talent Rotation Program</p>
            </ResumeMainBlock>
          </ResumeExperienceBlock>

          <ResumeExperienceBlock>
            <ResumeHeaderBlock>
              <h1>Leadership and Service</h1>
              <hr className="ResumeUnderline"></hr>
            </ResumeHeaderBlock>
            <ResumeMainBlock>
              <h3 className="m-0">First Year Advisory Council</h3>
              <p>Board Member</p>
            </ResumeMainBlock>
            <ResumeMainBlock>
              <h3 className="m-0">Durham VA Hospital Emergency Department</h3>
              <p>Volunteer</p>
            </ResumeMainBlock>
            <ResumeMainBlock>
              <h3 className="m-0">DukeGIVE</h3>
              <p>Founding Member</p>
            </ResumeMainBlock>
          </ResumeExperienceBlock>
        </ResumeMainColLeft>
        <ResumeMainColRight xs="12" md="5">
          <ResumeExperienceBlock>
            <ResumeHeaderBlock>
              <h1>Research Experience</h1>
              <hr className="ResumeUnderline"></hr>
            </ResumeHeaderBlock>
            <ResumeMainBlock>
              <h3 className="m-0">Duke University Thoracic Surgery Group</h3>
              <p>Researcher</p>
            </ResumeMainBlock>
            <ResumeMainBlock>
              <h3 className="m-0">Musah Lab</h3>
              <p>Researcher</p>
            </ResumeMainBlock>
          </ResumeExperienceBlock>
          <ResumeExperienceBlock>
            <ResumeHeaderBlock>
              <h1>Publications</h1>
              <hr className="ResumeUnderline"></hr>
            </ResumeHeaderBlock>
            <ResumeMainBlock>
              <h3 className="m-0">
                The Oldest Old: A National Analysis of Outcomes for Patients 90
                Years or Older with Non-small-cell Lung Cancer
              </h3>
              <p>
                Yang, CF., <b>Brown, A.,</b> Lui, N., Backhus, L., Shrager J.,
                D’Amico, T., Berry, M.
              </p>
            </ResumeMainBlock>
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
