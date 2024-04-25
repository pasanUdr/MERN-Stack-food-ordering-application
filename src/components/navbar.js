import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function navbar () {
  return (
    <>
<Navbar bg="dark" data-bs-theme="dark" sticky='top'>
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Navbar.Brand href="#home"><img style={{width:50}} src="/images/logo.png" alt="logo" /></Navbar.Brand>
          <Nav className="mr-auto" >
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#logIn">Log-In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default navbar;