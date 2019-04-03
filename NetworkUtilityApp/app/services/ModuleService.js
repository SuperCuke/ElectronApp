import PingModule from '../containers/PythonModules/PingModule';
import TraceModule from '../containers/PythonModules/TraceModule';
import CiscoConfigBackupCLIModule from '../containers/PythonModules/CiscoConfigBackupCLIModule';
import CiscoSwitchInventoryCollectorCLIModule from '../containers/PythonModules/CiscoSwitchInventoryCollectorCLIModule';
import CiscoSwitchShowCommandsCLIModule from '../containers/PythonModules/CiscoSwitchShowCommandsCLIModule';
import TextFSMCLIModule from '../containers/PythonModules/TextFSMCLIModule';

import * as ConfigurationService from '../services/ConfigurationService';


export var GetAllModules = function () {
  return {
    CiscoConfigBackupCLIModule: CiscoConfigBackupCLIModule,
    CiscoSwitchInventoryCollectorCLIModule: CiscoSwitchInventoryCollectorCLIModule,
    CiscoSwitchShowCommandsCLIModule: CiscoSwitchShowCommandsCLIModule,
    TextFSMCLIModule: TextFSMCLIModule
  };
}


export var GetSupportedModules = function () {
  var rez = {};
  debugger;
  var configuration = ConfigurationService.GetConfiguration();
  var allModules = GetAllModules();
  var keys = Object.keys(allModules).filter(f => configuration.favoriteModules.indexOf(f) != -1);
  keys.forEach((k) => rez[k] = allModules[k]);
  return rez;
}
