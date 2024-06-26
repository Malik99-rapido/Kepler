import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Store from './store';
import Kepler from './kepler';


function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <Provider store={Store}>
      <Kepler></Kepler>
    </Provider>
  );
}

export default App;
