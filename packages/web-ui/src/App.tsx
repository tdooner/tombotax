import * as React from 'react';
import './App.css';

import Forms from '@tombotax/forms';

const App: React.FC = () => {
  const form = new Forms.US1040('foo');

  return (
    <div className="App">
      {form.line1}
    </div>
  );
}

export default App;
