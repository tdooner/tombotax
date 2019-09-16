import { Col, Row } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

import AppLayout from '../AppLayout';

const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <Row>
        <Col>
          <p>Welcome to Tombotax!</p>
          <p>You can do anything at Tombotax.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/flow" className="btn btn-primary">
            Start
          </Link>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default HomePage;
