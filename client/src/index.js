import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import App from './App';
import LandingPage from './components/landing-page/landing-page';
import AsidePanel from './components/aside-panel/aside-panel';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);
