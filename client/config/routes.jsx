import { Router, hashHistory, Route, IndexRoute } from 'react-router';

const Routes = () => (
  <Router history={hashHistory} >
    <Route path='/' component={App} >
      <IndexRoute component={Main} />
    </Route>
  </Router>
);

export default Routes;
