import React, { useState } from 'react';
import { SncfButton } from './components/SncfButton/SncfButton';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count +1);
  const appCountClass = (count >=5) ? 'App-count' : '';
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>
          Bibliothèque des Composants
          </h1>
        <SncfButton 

          label='Connection'
          onClick={() => handleClick()}
          primary
        />
        <p>Compteur de click:</p>
        <p className={appCountClass}>{count}</p>
      </header>
    </div>
  );
}

export default App;
