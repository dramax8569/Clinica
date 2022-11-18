import './App.css';
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "./layouts/Navbar";
import { Footer } from "./layouts/Footer";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Screen5 from './pages/Screen5';
import Screen6 from './pages/Screen6';
import Screen7 from './pages/Screen7';
import Screen8 from './pages/Screen8';


function App() {
  return (
    <Router>    
      <Routes>
        <Route path="/" element={<Screen5/>} />
        <Route path="/historial-paciente" element={<Screen6/>} />
        <Route path="/agendar-cita" element={<Screen7/>} />
        <Route path="/pqr" element={<Screen8/>} />
      </Routes>
    </Router>
  );
}

export default App;
