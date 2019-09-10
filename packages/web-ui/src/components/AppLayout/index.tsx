import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const AppLayout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container>
          <Link className="navbar-brand" to="/">Tombotax</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/forms" className="nav-link">Forms</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        {children}
      </Container>
    </React.Fragment>
  );
};

export default AppLayout;
