import { Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';

const AppLayout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand href="/">Tombotax</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/forms">Forms</Nav.Link>
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
