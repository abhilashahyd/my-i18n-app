import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderPart from "./HeaderPart";
import AccordionSample from './AccordionSample';
import SubHeader from './SubHeader';

function App() {
  return (
    <div className="App">
      <HeaderPart/>
      <SubHeader/>
      <AccordionSample/>
    </div>
  );
}

export default App;
