import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import IndexContent from './pages/IndexContent';
// import Content from './pages/Content'
// import Column_kao from './pages/Column_kao'
// import Current_feature from './pages/Current_feature'
// import Interview from './pages/Interview'
// import International from './pages/International'
// import Column_chien from './pages/Column_chien'
import App from "./App"

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
