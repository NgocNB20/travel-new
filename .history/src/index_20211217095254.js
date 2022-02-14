import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Router } from 'react-router-dom';
import { BlogProvider } from './contexts/BlogContext';

ReactDOM.render(
  <React.StrictMode>
  <BlogProvider>
    <Router>
      <App />
    </Router>
  </BlogProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
