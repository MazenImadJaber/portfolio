import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import "./Home.css"
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    const goToAboutPage=()=>{
        navigate("/about")
    }
    return (
    < Container fluid className="p-0 full-height">
      <Row noGutters className="hero-section">
        <Col className="hero-image" >
          <div className="hero-content">
            <h1>Welcome to My Portfolio</h1>
            <p>Hello! My name is Mazen Imad Jaber, Welcome to my perosnal website and Portfolio!</p>
            <Button variant="primary" onClick={()=> goToAboutPage()}>Learn More</Button>
          </div>
        </Col>
      </Row>
    </Container> 
    );
};

