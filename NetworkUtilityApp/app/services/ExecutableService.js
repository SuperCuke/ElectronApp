const { spawn } = require('child_process');

export var ExecuteExe = function (name, args, callback) {
  var fullPath = __dirname + '\\executables\\' + name ;
  debugger;
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
}
