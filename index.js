import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Fetch from './Redux/Fetch';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fetch />
  </React.StrictMode>
);

