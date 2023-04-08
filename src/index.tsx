import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Beautiful dnd invarient issue. Remove Strict mode tags from this file
// https://github.com/atlassian/react-beautiful-dnd/issues/2396

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 // <React.StrictMode>
    <App />
  //</React.StrictMode>
);