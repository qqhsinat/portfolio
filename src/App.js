import './App.css';
import HomePage from './components/HomePage.js';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio.js';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
  <Router>
  <Navbar/>
  <Routes>
    <Route path="/portfolio" element={<Portfolio></Portfolio>}/>
    <Route path="/" element={<HomePage/>}/>
  </Routes>
  </Router>
  );
}

export default App;
