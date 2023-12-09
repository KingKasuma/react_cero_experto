import React from 'react';
import ReactDom from 'react-dom/client';

// import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp'
import './style.css';
import { CounterApp } from './CounterApp';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={20} />
  </React.StrictMode>
)
