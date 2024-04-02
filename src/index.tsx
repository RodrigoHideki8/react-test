import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

const onPerfEntry = (entry: any) => {
  console.log(entry);
};


reportWebVitals(onPerfEntry);