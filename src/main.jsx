import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

// import { Padre } from './usando-memo/Padre';
import { PokeApp } from './pokemon-app/PokeApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokeApp />
  </React.StrictMode>
)