import React from 'react';
import { Container,Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
    return (
        <div>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">SHAKAWAT HOSSAIN</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link target="_blank" href="https://drive.google.com/file/d/1H7NRmvRZ_4tdGIM3pGy6242YkuYJY3Wm/view?usp=sharing">Resume</Nav.Link>
      <Nav.Link href="#pricing">Projects</Nav.Link>
      <Nav.Link href="#pricing">About Me</Nav.Link>
     
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;



