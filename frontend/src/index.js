import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
