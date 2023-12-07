import React from 'react';
import ReactDom from 'react-dom/client';

function App() {
  // document.creteElement
  return <h1>Hola mundo</h1>;
}

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
