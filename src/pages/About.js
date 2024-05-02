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
         My Name is Mazen, Orignally from Syria, been in Australia for 10 years!
          </p>
          <p>
            I am a software and computer systems graduate and Currentlly undertaking my Masters degree in data analytics at QUT
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
