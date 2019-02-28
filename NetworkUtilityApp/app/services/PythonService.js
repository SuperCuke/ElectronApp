var pShell = require('python-shell')

export var ExecuteScript = function (name, args, callback) {
  let options = {
    mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: './python',
    args: args || [] 
  };

  pShell.PythonShell.run(name, options, function (err, results) {
    debugger;
    if (err)
      callback(results, err.message);
    else
      callback(results);
  });
}
