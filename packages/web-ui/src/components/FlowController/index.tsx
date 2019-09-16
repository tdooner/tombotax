import { Button } from 'react-bootstrap';
import { connect, useSelector } from 'react-redux';
import React from 'react';

import { CombinedState } from '../../stores/form/types';
import { flowNextPage } from '../../stores/form/actions';
import AppLayout from '../AppLayout';

const FlowPageOne: React.FC<{ flowNextPage: typeof flowNextPage }> = ({ flowNextPage }) => {
  return (
    <AppLayout>
      <p>Flow Step 1</p>
      <Button onClick={() => flowNextPage()}>Next</Button>
    </AppLayout>
  );
};
const ConnectedFlowPageOne = connect(() => ({}), { flowNextPage })(FlowPageOne);

class FlowPageTwo extends React.Component {
  render() {
    return (
      <AppLayout>
        <p>Flow Step 2</p>
      </AppLayout>
    );
  }
};

const FLOW_STEPS: React.ComponentType[] = [
  ConnectedFlowPageOne,
  FlowPageTwo,
];

const FlowController: React.FC = () => {
  const pageIndex = useSelector((state: CombinedState) => state.flow.pageIndex);

  return React.createElement(FLOW_STEPS[pageIndex]);
};

export default FlowController;
