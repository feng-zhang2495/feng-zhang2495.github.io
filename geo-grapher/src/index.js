// ReactDOM.render(WHAT DO I WANT TO RENDER <html here>, WHERE DO I WANT TO RENDER IT  document.getElementById('root') #sticks it into div with id "root")

// JSX - react cant render two separate elements, like H1 and p, so you have to put everything in one div so that it counts as one element


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RenderHTML from './components/RenderHTML'




// Imports App.js and uses the html there to render onto the page, APP.js does not actually run, its index.js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <RenderHTML />,
//   document.getElementById('root')
// );