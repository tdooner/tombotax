import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import React from 'react';

import { CombinedState } from '../../stores/form/types';
import { addForm } from '../../stores/form/actions';
import AppLayout from '../AppLayout';

const FormsPage: React.FC<{ formCount: number, addForm: typeof addForm }> = (props) => {
  return (
    <AppLayout>
      <Row>
        <Col xs={4}>
          Input Forms: {props.formCount}
        </Col>

        <Col xs={4}>
          <button onClick={() => props.addForm(1)}>Add Form</button>
        </Col>
      </Row>
    </AppLayout>
  );
};

const mapStateToProps = (state: CombinedState) => ({
  formCount: state.form.count,
});

export default connect(
  mapStateToProps,
  { addForm },
)(FormsPage);
