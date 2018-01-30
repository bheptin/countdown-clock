import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';

import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/clock" component={Clock} />
      </div>
  </BrowserRouter>,

  document.getElementById('root')
);
registerServiceWorker();
