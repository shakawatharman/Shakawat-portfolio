import React from 'react';
import { Container,Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="fixed-top">
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className="text-danger fw-bold" href="/home">SHAKAWAT HOSSAIN</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
      <Nav.Link className="text-white" target="_blank" href="https://drive.google.com/file/d/1H7NRmvRZ_4tdGIM3pGy6242YkuYJY3Wm/view?usp=sharing">Resume</Nav.Link>
      <Nav.Link className="text-white" as={Link} to="/blogs">Blogs</Nav.Link>
     
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;



