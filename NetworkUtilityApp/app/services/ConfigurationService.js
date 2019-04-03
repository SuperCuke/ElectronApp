import * as fs from 'fs';
import { stringify } from 'querystring';

var configuration = null;
try {
  configuration = JSON.parse(fs.readFileSync('configuration.json'));
  configuration.favoriteModules = onfiguration.favoriteModules || [];
}
catch (e) {
  configuration = {
    favoriteModules: [],
    username : '',
    password: '',
    parallelSessions: ''
  };
}

export var GetConfiguration = function () {
  return configuration;
} 

export var SaveConfiguration = function (newConf) {
  configuration = newConf;
  fs.writeFileSync('configuration.json', JSON.stringify(configuration), 'utf8');
}
