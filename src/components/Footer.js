import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container>
        <Row>
          <Col className="text-center p-3">Email: mazenj1997@gmail.com</Col>
          <Col className="text-center p-3">Phone: +1234567890</Col>
        </Row>

        <Row className="text-center p-3">
          <Col className="text-center p-3">© {new Date().getFullYear()}</Col>
        </Row>
      </Container>
    </footer>
  );
}
