const { spawn } = require('child_process');
import app from 'electron';
import * as elect from 'electron';

export var ExecuteExe = function (name, args, callback) {
  debugger;
  try {
    var basePath = require('electron').remote.app.getAppPath();
    if (basePath.indexOf('resources') != -1)
      basePath = basePath.split('resources')[0];

    if (basePath.indexOf('node_modules') != -1)
      basePath = basePath.split('node_modules')[0];

    var fullPath = basePath + 'executables\\' + name;

    const proc = spawn(fullPath, args);

    proc.stdout.on('data', (data) => {
      callback(data); 
      console.log(`stdout: ${data}`);
    });

    proc.stderr.on('data', (data) => {
      callback(data);
      console.log(`stderr: ${data}`);
    });

    proc.on('close', (code) => {
      callback(`process exited with code ${code}`);
      console.log(`child process exited with code ${code}`);
    });
  } catch (e) {
    callback(`call failed ${e.message || e}`);
    console.log(`call failed ${e.message || e}`);
  }

}
