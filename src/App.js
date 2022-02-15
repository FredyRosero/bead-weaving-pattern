import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="preview">
      <svg width="100" height="100">
            <circle cx="5" cy="5" r="5" stroke="green" strokeWidth="4" fill="yellow" />
          </svg>        
      </div>
      <div className="canvasContainer">
        <div className="sides">
        </div>
        <div className="canvas">
          <button>11</button>
          <button>12</button>
          <button>13</button>
          <button>14</button>
          <button>11</button>
          <button>12</button>
          <button>13</button>
          <button>14</button>
        </div>
        <div className="sides">

        </div>
      </div>
      <div className="picker">
        <button className="left">&#60;</button>
        <button>12</button>
        <button>13</button>
        <button>14</button>
        <button className="right">&#62;</button>
        <button className="more">+</button>
      </div>
    </div>
  );
}

export default App;
