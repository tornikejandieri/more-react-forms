import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Cv from './Cv';
import Education from './Education';
import InputParent from './InputParent';
import Skills from './Skills';
import Welcome from './Welcome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/inputparent' element={<InputParent />} /> 
          <Route path='/cv' element={<Cv />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
