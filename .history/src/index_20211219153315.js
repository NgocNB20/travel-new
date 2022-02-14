import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import { BlogProvider } from './contexts/BlogContext';
import { PlaceProvider } from './contexts/PlaceContext';

ReactDOM.render(
  <React.StrictMode>
  
  <BlogProvider>
     
      <App />
    
  </BlogProvider>
 
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
