import { Col, Row } from 'react-bootstrap';
import React from 'react';

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
    </AppLayout>
  );
};

export default HomePage;
