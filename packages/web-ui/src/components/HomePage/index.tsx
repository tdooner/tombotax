import { Col, Row } from 'react-bootstrap';
import React from 'react';

import AppLayout from '../AppLayout';

const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <Row>
        <Col>
          Welcome to Tombotax!
        </Col>
      </Row>
    </AppLayout>
  );
};

export default HomePage;
