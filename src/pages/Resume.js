import React from 'react';
export default function Resume()  {
    const resumeData = {
        name: 'Your Name',
        email: 'your.email@example.com',
        phone: '123-456-7890',
        skills: ['React', 'JavaScript', 'CSS'],
        experience: [
            {
                company: 'Company 1',
                position: 'Position 1',
                duration: 'Jan 2020 - Present',
                responsibilities: 'Describe your responsibilities here'
            },
            {
                company: 'Company 2',
                position: 'Position 2',
                duration: 'Jan 2018 - Dec 2019',
                responsibilities: 'Describe your responsibilities here'
            }
        ],
        education: [
            {
                institution: 'University 1',
                degree: 'Degree 1',
                duration: 'Year 1 - Year 2'
            },
            {
                institution: 'University 2',
                degree: 'Degree 2',
                duration: 'Year 3 - Year 4'
            }
        ]
    };

    return (
        <div>
            <h1>{resumeData.name}</h1>
            <p>{resumeData.email}</p>
            <p>{resumeData.phone}</p>
            <h2>Skills</h2>
            <ul>
                {resumeData.skills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <h2>Experience</h2>
            {resumeData.experience.map((exp, index) => (
                <div key={index}>
                    <h3>{exp.company}</h3>
                    <p>{exp.position}, {exp.duration}</p>
                    <p>{exp.responsibilities}</p>
                </div>
            ))}
            <h2>Education</h2>
            {resumeData.education.map((edu, index) => (
                <div key={index}>
                    <h3>{edu.institution}</h3>
                    <p>{edu.degree}, {edu.duration}</p>
                </div>
            ))}
        </div>
    );
}

