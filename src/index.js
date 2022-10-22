import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Context, Provider as MarkProvider } from './Context/MarkDownContext';
import { Provider } from 'react-redux'
import { store } from './Features/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
    <App />
    </Provider>
      

);


