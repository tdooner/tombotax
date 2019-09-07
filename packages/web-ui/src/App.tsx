import React, { useState } from 'react';
import './App.css';

import Forms from '@tombotax/forms';

const App: React.FC = () => {
  const [form, setForm] = useState('foo');
  const us1040 = new Forms.US1040(form);

  return (
    <div className="App">
      <input name="line1" onChange={(e) => setForm(e.target.value)}  />
      {us1040.line1}
    </div>
  );
}

export default App;
