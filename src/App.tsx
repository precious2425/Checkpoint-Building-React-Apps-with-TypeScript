import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';

// A simple wrapper component so we can see both converted
// TypeScript components rendering together in the browser.
const App = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>TypeScript React Checkpoint</h1>

      <h2>Code 01 — Greeting</h2>
      <Greeting name="Precious" />

      <h2>Code 02 — Counter</h2>
      <Counter />
    </div>
  );
};

export default App;
