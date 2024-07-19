// src/components/Navbar/NavbarCustom.jsx

import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/NLP-Talks.png';
import useLogout from '../../hooks/useLogout';
import { useAuthContext } from '../../context/AuthContext';

function NavbarCustom({}) {
  const navigate = useNavigate();
  const {loading, logout} = useLogout();
  const {authUser} = useAuthContext();

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Chat App Logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          NLP Talks
        </Navbar.Brand>
        <Nav className="me-auto">
          {authUser ? (
            <>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
