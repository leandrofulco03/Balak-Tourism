import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBarBoost() {
  return (
    <div className='nav'>
      <Navbar collapseOnSelect expand="lg">
      <Container>
        <Link to={'/'}><Navbar.Brand><img src='/img/logo.jpg' alt='logo' width={50} />Balak</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav_links">
            <Link to={'/'}><Nav.Link href="#features">Inicio</Nav.Link></Link>
            <Nav.Link href='#destiny'>Destinos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  )
}

export default NavBarBoost;