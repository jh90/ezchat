import { Component } from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

export default class Routes extends Component {
  render () {
    <Router history={hashHistory} >
      <Route path='/' component={App} >
        <IndexRoute component={Main} />
      </Route>
    </Router>
  }
}
