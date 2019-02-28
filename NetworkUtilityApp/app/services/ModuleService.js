import PingModule from '../containers/PythonModules/PingModule';
import TraceModule from '../containers/PythonModules/TraceModule';

import * as ConfigurationService from '../services/ConfigurationService';


export var GetAllModules = function () {
  return {
    PingModule: PingModule,
    TraceModule: TraceModule
  };
}


export var GetSupportedModules = function () {
  var rez = {};
  debugger;
  var configuration = ConfigurationService.GetConfiguration();
  var allModules = GetAllModules();
  var keys = Object.keys(allModules).filter(f => configuration.hideModules.indexOf(f) == -1);
  keys.forEach((k) => rez[k] = allModules[k]);
  return rez;
}
