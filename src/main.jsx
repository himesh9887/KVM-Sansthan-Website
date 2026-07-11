import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';
import Analytics from './components/common/Analytics.jsx';
import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Analytics />
      <App />
      <ToastContainer position="bottom-right" autoClose={3500} theme="colored" />
    </HelmetProvider>
  </React.StrictMode>,
);


