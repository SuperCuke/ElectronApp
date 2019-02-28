import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import ScriptSbPage from './containers/ScriptSbPage';
import ModulePage from './containers/ModulePage';
import ConfigurationPage from './containers/ConfigurationPage';

export default () => (
  <App> 
    <Switch> 
      <Route path={routes.COUNTER} exact component={CounterPage} /> 
      <Route path={routes.SCRIPTSB} exact component={ScriptSbPage} />
      <Route path={routes.CONFIGURATION} exact component={ConfigurationPage} />
      <Route path={routes.HOME} exact component={HomePage} />
      <Route path={routes.MODULES} component={ModulePage} />
      <Route path="/" component={HomePage} /> 
    </Switch>
  </App> 
);
