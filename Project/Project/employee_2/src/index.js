import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './component/AuthContext';
import App from './AppDemo/AppDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <AuthProvider>
  //   <App/>
  // </AuthProvider>

  <App/>
);

reportWebVitals();
