import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createContext } from 'react';

export const TreesContext = createContext();

const trees = [
  { id: '1', name: 'Tree 1'},
  { id: '2', name: 'Tree 2'},
  { id: '3', name: 'Tree 3'},
  { id: '4', name: 'Tree 4'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
