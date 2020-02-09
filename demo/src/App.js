import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div data-test='component-app' className='App'>
      <h1 data-test='counter-display'>The counter is currently {counter}</h1>
      <button
        data-test='increment-button'
        onClick={() => setCounter(counter + 1)}
      >
        Increment counter
      </button>
    </div>
  );
};

export default App;
