import React from 'react';
import './App.css';
import Background from './components/Background';
import Foreground from './components/Foreground';

function App() {
  return (
    <div className = "main">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
