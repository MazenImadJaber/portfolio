import React from 'react';
import { Container } from 'react-bootstrap';


export default function Portfolio() {
    const portfolioData = [
        {
            title: 'Project 1',
            description: 'Description of Project 1',
            link: 'Link to Project 1'
        },
        {
            title: 'Project 2',
            description: 'Description of Project 2',
            link: 'Link to Project 2'
        },

    ];

    return (
        <Container>
            <h1>My Portfolio</h1>
            {portfolioData.map((project, index) => (
                <div key={index}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.link}>View Project</a>
                </div>
            ))}
        </Container>
    );
};

