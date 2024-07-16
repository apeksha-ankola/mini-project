import React, { useState } from 'react';
import { Container, Navbar, Nav, Card, Button, Row, Col, Collapse } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../images/NLP-Talks.png';
import SignUp from '../Signup/Signup';
import Login from '../Login/Login';
import './HomeStyles.css';

function Home({ isLoggedIn, handleLogout, handleLogin }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
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
            <Nav.Link as={Link} smooth to="#home-section">Home</Nav.Link>
            <Nav.Link as={Link} smooth to="#login-section">Login</Nav.Link>
            <Nav.Link as={Link} smooth to="#signup-section">Sign Up</Nav.Link>
          </Nav>
          {isLoggedIn && (
            <Button variant="outline-info" onClick={handleLogout}>Logout</Button>
          )}
        </Container>
      </Navbar>
      <Container className="mt-5" id="home-section">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="card-custom">
              <Card.Body>
                <img
                  src={logo}
                  alt="Chat App Logo"
                  className="logo-bounce"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <Card.Title className="card-title-custom">Welcome to NLP Talks</Card.Title>
                <Card.Text className="card-text-custom">
                  Dive into the world of Natural Language Processing with our engaging talks and discussions.
                </Card.Text>
                <Button
                  variant="info"
                  onClick={() => setOpen(!open)}
                  aria-controls="login-form"
                  aria-expanded={open}
                  className="button-custom"
                >
                  Already a user? Login
                </Button>
                <Collapse in={open}>
                  <div id="login-form">
                    <Login onLogin={handleLogin} />
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5" id="signup-section">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="card-custom">
              <Card.Body>
                <Card.Title className="card-title-custom">New User? Please Sign Up</Card.Title>
                <SignUp />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
