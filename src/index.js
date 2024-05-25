import React from 'react';
import ReactDOM from 'react-dom/client';
import './styled-Components/style.css'
import App from './App';
import GoogleAnalyticsSetup from './components/GoogleAnaliticsSetup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleAnalyticsSetup/>
    <App />
  </React.StrictMode>
);

