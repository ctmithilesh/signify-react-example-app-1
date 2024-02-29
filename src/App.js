import React from 'react';
import './App.css';
import Addition from './components/Addition';
import Subtraction from './components/Subtraction';

function App() {

  const message = "My Root Component";

  // Component Template 
  return (
    <>
      <Addition />
      <Subtraction />
    </>
  );
}

export default App;
