import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { logout } from '../utils/auth'

function NavbarComponent() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand>Browntify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="mx-auto">
          <Nav className="me-auto text-center">
            <Nav.Link as={NavLink} to="/myplaylist">My Playlist</Nav.Link>
            <Nav.Link as={NavLink} to="/create">Create Playlist</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="danger" onClick={logout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent