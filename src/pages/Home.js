import React from 'react';
import homePic from '../assets/1648047955977.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';
export default function Home() {
    return (
        <Container >
            <Row>
                <Col>
                <h1>Welcome to My Portfolio</h1>
                <p>Hello! My name is Mazen Imad Jaber, Welcome to my perosnal website and Portfolio!</p>
                </Col>
                <Image className='image' alt="Mazen" src={homePic} fluid/>
            </Row>
           
            
        </Container>
    );
};

