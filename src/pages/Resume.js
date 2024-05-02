import React from "react";
import { Container } from "react-bootstrap";
const resumeData = {
  name: "Mazen Imad Jaber",
  email: "mazenj1997@gmail.com",
  summary: ` I am  a driven, and well-educated young software engineer and future data analyst with exceptional communication,
    time management, and decision-making skills.
     I am passionate about applying my creative thinking and innovative problem-solving skills in the areas of Software Engineering, software development and Data Analysis. `,
  phone: "123-456-7890",
  skills: ["React", "JavaScript", "CSS"],
  experience: [
    {
      company: "Company 1",
      position: "Position 1",
      duration: "Jan 2020 - Present",
      responsibilities: "Describe your responsibilities here",
    },
    {
      company: "Company 2",
      position: "Position 2",
      duration: "Jan 2018 - Dec 2019",
      responsibilities: "Describe your responsibilities here",
    },
  ],
  education: [
    {
      institution: "University 1",
      degree: "Degree 1",
      duration: "Year 1 - Year 2",
    },
    {
      institution: "University 2",
      degree: "Degree 2",
      duration: "Year 3 - Year 4",
    },
  ],
};
export default function Resume() {
  return (
    <Container>
      <h1>{resumeData.name}</h1>
      <p>{resumeData.summary}</p>
      <p>{resumeData.email}</p>
      <p>{resumeData.phone}</p>
      <h2>Skills</h2>
      <ul>
        {resumeData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h2>Experience</h2>
      {resumeData.experience.map((exp, index) => (
        <div key={index}>
          <h3>{exp.company}</h3>
          <p>
            {exp.position}, {exp.duration}
          </p>
          <p>{exp.responsibilities}</p>
        </div>
      ))}
      <h2>Education</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.institution}</h3>
          <p>
            {edu.degree}, {edu.duration}
          </p>
        </div>
      ))}
    </Container>
  );
}
