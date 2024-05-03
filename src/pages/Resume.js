import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Resume.css";

const Resume = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={8}>
          <Card className="p-4 mb-4">
            <h2>Summary</h2>
            <p>
              Methodical, driven, and well-educated young software engineering
              professional with exceptional communication, time management, and
              decision-making skills. Adept at identifying issues with existing
              web designs, creating innovative new software programs, and
              applying excellent troubleshooting skills. Equipped with broad
              knowledge of all phases of the software development life. Conveys
              technical information to diverse audiences leveraging outstanding
              communication skills. Excel at troubleshooting, problem-solving,
              and being collaborative team player.
            </p>
          </Card>

          <Card className="p-4 mb-4">
            <h2>Core Competencies</h2>
            <ul>
              <Row>
                <Col>
                  <li>Strategic Thinking</li>
                  <li>Decision Making</li>
                  <li>Attention to Detail</li>
                  <li>Communication & Collaboration</li>
                  <li>Teamwork</li>
                  <li>Empathetic</li>
                </Col>
                <Col>
                  <li>Positive</li>
                  <li>Creative</li>
                  <li>Learning & Innovation</li>
                  <li>Information Management</li>
                  <li>Analytical</li>
                </Col>
              </Row>
            </ul>
          </Card>

          <Card className="p-4 mb-4">
            <h2>Technical Proficiencies</h2>
            <p>
              <strong>Languages:</strong> C & C#, Java, JS, & TS, MATLAB and
              Python
              <br />
              <strong>Frameworks:</strong> Angular, React & React Native,
              Bootstrap, NodeJS and .NET for Unity Game Engine
              <br />
              <strong>Skills:</strong> Agile Development, Clean Code, Test
              Driven Development, Machine Learning, Data Structures, Object
              Oriented Programming, Software Development for Embedded Systems,
              Signal Processing & Analysis and Image Analysis & Processing
              <br />
              <strong>Tools:</strong> AWS, GCP, Terraform, Git
              <br />
              <strong>Mathematics:</strong> Calculus, linear algebra, ODEs,
              Mixed-Integer Programming, Probabilities, Mathematical Modelling &
              Simulation
            </p>
          </Card>

          {/* Add other sections similarly */}
        </Col>

        <Col lg={4}>
          <Card className="p-4 mb-4">
            <h2>Education</h2>
            <p>
              <strong>Master of Data Analytics</strong>
              <br />
              Queensland University of Technology (QUT), 2024 – current
              <br />
              <br />
              <strong>
                Bachelor of Engineering, Computer & Software Systems /
                Mathematical Sciences for Engineering
              </strong>
              <br />
              Queensland University of Technology (QUT), 2021 – with honours
              <br />
              <br />
              <strong>High School Diploma</strong>
              <br />
              Sunnybank State High School, Sunny Bank QLD, 2016
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
