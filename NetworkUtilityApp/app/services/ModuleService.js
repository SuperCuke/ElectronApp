import PingModule from '../containers/PythonModules/PingModule';
import TraceModule from '../containers/PythonModules/TraceModule';
import CiscoConfigBackupCLIModule from '../containers/PythonModules/CiscoConfigBackupCLIModule';
import CiscoSwitchInventoryCollectorCLIModule from '../containers/PythonModules/CiscoSwitchInventoryCollectorCLIModule';
import CiscoSwitchShowCommandsCLIModule from '../containers/PythonModules/CiscoSwitchShowCommandsCLIModule';
import TextFSMCLIModule from '../containers/PythonModules/TextFSMCLIModule';


export var GetAllModules = function () {
  return {
    CiscoConfigBackupCLIModule: CiscoConfigBackupCLIModule,
    CiscoSwitchInventoryCollectorCLIModule: CiscoSwitchInventoryCollectorCLIModule,
    CiscoSwitchShowCommandsCLIModule: CiscoSwitchShowCommandsCLIModule,
    TextFSMCLIModule: TextFSMCLIModule
  };
}
