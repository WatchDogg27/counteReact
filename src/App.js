import React from 'react';
import './App.css';
import { useState } from 'react'

function App() {
  const[counter, setCounter] = useState(0)
  return (
    <div className='torso'>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      
      <button className='btn' onClick ={() => setCounter(counter +1)}>
        Increase
      </button>
      <button className='btn' onClick ={() => setCounter(counter -1)}>
        Decrease
      </button>
      <button className='btn' onClick ={() => setCounter(0)}>
        Reset
      </button>

    </div>
  );
}

export default App;
