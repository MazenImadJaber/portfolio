import React from 'react';
export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2>About Me</h2>
          <p>
            I'm John Doe, a passionate web developer with experience in building
            responsive and user-friendly websites. I enjoy turning complex
            problems into simple, beautiful, and intuitive designs.
          </p>
          <p>
            My journey as a developer started back in college, where I
            discovered my love for coding. Since then, I've been constantly
            learning and improving my skills to keep up with the latest
            technologies.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src="https://via.placeholder.com/400"
            alt="John Doe"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
