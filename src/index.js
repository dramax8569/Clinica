import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { Auth0Provider } from "@auth0/auth0-react";
=======
import Screen5 from './pages/Screen5';
import Screen6 from './pages/Screen6';
import Screen7 from './pages/Screen7';
import Screen8 from './pages/Screen8';
>>>>>>> 5163330c86bbc72202902004cd21c610cf2821ba

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Auth0Provider
      domain="dev-wlsqw4lmid4d5qlb.us.auth0.com"
      clientId="9Vkvc6sawIcp3aRxY14KkXMbyVlaF32u"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
=======
    <Router>
      <Routes>
        <Route path="/" element={<Screen5/>} />
        <Route path="/historial-paciente" element={<Screen6/>} />
        <Route path="/agendar-cita" element={<Screen7/>} />
        <Route path="/pqr" element={<Screen8/>} />
      </Routes>
    </Router>
>>>>>>> 5163330c86bbc72202902004cd21c610cf2821ba
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
