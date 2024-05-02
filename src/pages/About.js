import React from 'react';
import { Container } from 'react-bootstrap';
import graduationImage from "../assets/IMG_1114.JPG"

export default function About() {
  return (
    <Container>
      <div className="row">
        <div className="col-lg-6">
          <h2>About Me</h2>
          <p>
          I am Mazen Jaber,  a driven, and well-educated young software engineer and future data analyst with exceptional communication, time management, and decision-making skills. I am passionate about applying my creative thinking and innovative problem-solving skills in the areas of Software Engineering, software development and Data Analysis. 
          </p>
          
        </div>
        <div className="col-lg-6">
          <img
            src={graduationImage}
            alt="John Doe"
            className="img-fluid"
          />
        </div>
      </div>
    </Container>
  );
}
