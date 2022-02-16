import React, { useState } from 'react';

import './App.css';
import Box from './Box';
import Bucket from './Bucket';
import Knight from './Knight';
import Square from './Square';
import Board from './Board';

function App() {

  const [count, setCount] = useState(0);

  const buttons = [];
  for (let i = 1; i <= 4 * 20; i++) {
    let b = <button
      className='bead'
      id={i}
      style={{
        width: 49, height: 49, backgroundColor: 'powderblue'
      }}
      onClick={() => setCount(count + 1)}
    >
      {i}
    </button>
    buttons.push(b);
  }

  return (
    <div className="App">
      <div className="preview">
        {count}
        <svg width="100" height="100">
          <circle cx="5" cy="5" r="5" stroke="green" strokeWidth="4" fill="yellow" />
        </svg>
      </div>
      <div className="canvasContainer">
        <div className="sides">
        </div>
        <div className="canvas" style={{ width: 50 * 4 }}>
          <Board knightPosition={[7,4]} />
        </div>
        <div className="sides">

        </div>
      </div>
      <div className="picker">
        <button className="left">&#60;</button>
        <button className='bead'>12</button>
        <button className='bead'>13</button>
        <button className='bead'>14</button>
        <button className="right">&#62;</button>
        <button className="more">+</button>
      </div>
    </div>
  );
}

export default App;
