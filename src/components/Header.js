import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href='/'>IFN666 - Mazen Imad Jaber </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link}  to="/about">About</Nav.Link>
            <Nav.Link as={Link}  to="/resume">Resume</Nav.Link>
            <Nav.Link as={Link}  to="/portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}
