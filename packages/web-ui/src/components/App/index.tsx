import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import FormsPage from '../FormsPage';
import HomePage from '../HomePage';

// import Forms from '@tombotax/forms';

const App: React.FC<{ basename?: string }> = (props) => {
  return (
    <BrowserRouter basename={props.basename} >
      <Route path="/" exact component={HomePage} />
      <Route path="/forms" exact component={FormsPage} />
    </BrowserRouter>
  );
}

export default App;
