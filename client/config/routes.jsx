import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import App from '../components/app.jsx';
import Main from '../components/main.jsx';

const Routes = () => (
  <Router history={hashHistory} >
    <Route path='/' component={App} >
      <IndexRoute component={Main} />
    </Route>
  </Router>
);

export default Routes;
