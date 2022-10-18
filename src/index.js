import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Context, Provider as MarkProvider } from './Context/MarkDownContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <MarkProvider>
    <App />
    </MarkProvider>
      

);


