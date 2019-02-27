var pShell = require('python-shell')

export var ExecuteScript = function (name, callback) {

  let options = {
    mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: './python',
    args: []
  };

  let pyshell = new pShell.PythonShell('./python/' + name);

  // sends a message to the Python script via stdin
  pyshell.send('');

  pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
    debugger;
    callback(message);
  });
}
