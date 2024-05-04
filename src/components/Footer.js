import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container>
        <Row>
          <Col className="text-center p-3">
            <h5>Acknowledgement</h5>
            <p>
              I acknowledge Traditional Owners of Country throughout Australia
              and recognises the continuing connection to lands, waters and
              communities. I pay our respect to Aboriginal and Torres Strait
              Islander cultures; and to Elders past and present. Aboriginal and
              Torres Strait Islander peoples should be aware that this website
              may contain images or names of people who have since passed away.
            </p>
          </Col>
          <Col className="text-center p-3 align-content-between">
            <Row>
              <>              <p>Email: mazenj1997@gmail.com</p>

              </>
            </Row>
            <Row>
              <>
              <p>Phone: +1234567890</p>

              </>
            </Row>
          </Col>
        </Row>
        <Row className="text-center p-3">
          <Col className="text-center p-3">
            © {new Date().getFullYear()} Mazen Imad Jaber
          </Col>
        </Row>
        <Row className="text-center p-3">
          <Col>
            <small className="text-muted">
              This app was build with React, react-router-dom, react-bootstrap
              and bootstrap
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
