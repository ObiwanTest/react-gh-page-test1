import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router basename="/react-gh-page-test1">
      <App />
    </Router>,
  document.getElementById('root')
);
