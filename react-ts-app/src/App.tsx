import React from 'react';
import './App.css';
import AppContext from './contexts/AppContext';
import { B } from './components/B';
import BasicReducer from './components/BasicReducer'

function App() {
  return (
    <AppContext.Provider value={'value from App.js'}>
      <div className="App">
        <BasicReducer />
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
    </AppContext.Provider>
  );
}

export default App;
