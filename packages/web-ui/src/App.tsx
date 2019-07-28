import React from 'react';
import logo from './logo.svg';
import './App.css';

import Forms from '@tombotax/forms';

const App: React.FC = () => {
  const form = new Forms.US1040('foo');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Form Line 1: {form.line1}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
