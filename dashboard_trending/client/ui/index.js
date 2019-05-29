import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import routes from "./routes";
import App from './App'
import AppLazyLoad from './AppLazyLoad'

// ReactDOM.render(routes, document.getElementById("content"));
ReactDOM.render(<AppLazyLoad/>, document.getElementById("content"));
