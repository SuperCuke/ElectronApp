import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import ScriptSbPage from './containers/ScriptSbPage';

export default () => (
  <App> 
    <Switch> 
      <Route path={routes.COUNTER} exact component={CounterPage} /> 
      <Route path={routes.SCRIPTSB} exact component={ScriptSbPage} />
      <Route path={routes.HOME} exact component={HomePage} />
      <Route path="/" component={HomePage} /> 
    </Switch>
  </App> 
);
