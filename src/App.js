import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cardscont from './components/Cardscont';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Cardscont>
        
      </Cardscont>
    </div>
  );
}

export default App;
