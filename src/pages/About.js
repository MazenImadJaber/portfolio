import React from "react";
import { Container } from "react-bootstrap";
import graduationImage from "../assets/IMG_1114.JPG";
import "./About.css";

export default function About() {
  return (
    <Container>
      <div className="row">
        <div className="col-lg-6 about">
          <h2 className="h2-about">About Me</h2>
          <p>
            Hello! My name is Mazen. I was born and raised in Syria, and I've
            been living in Australia for the past 10 years.
          </p>
          <p>
            I am a graduate in software and computer systems, and I'm currently
            pursuing my Masters degree in data analytics at QUT. My academic
            journey has been a thrilling ride, filled with endless opportunities
            to learn and grow.
          </p>
          <p>
            One of the things I'm most passionate about is creativity. I believe
            that creativity is not just about creating something new, but also
            about finding unique solutions to problems. This passion extends to
            my love for problem-solving, especially when it comes to technology.
            I enjoy the challenge of figuring out how to make things work better
            and more efficiently.
          </p>
          <p>
            This website is a testament to my passion for creativity and
            problem-solving. It was created as part of an assignment, but it's
            more than just a project for me. It's a platform where I can
            showcase my skills, share my knowledge, and express my creativity.
          </p>
          <p>
            I hope you enjoy exploring my website as much as I enjoyed building
            it!
          </p>
        </div>
        <div className="col-lg-6 image-cont">
          <img className="about-img img-fluid"src={graduationImage} alt="Mazen's graduation picture" />
        </div>
      </div>
    </Container>
  );
}
