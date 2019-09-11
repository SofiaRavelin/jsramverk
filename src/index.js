import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router';
import './index.css';
import App from './App';
//import Report from './report';
//import Me from './me.js';
//import One from './reports/week/1.js';
//import About from './about';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Report />, document.getElementById('root'));
//ReactDOM.render(<One />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<About />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
