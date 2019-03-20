var exec = require('child_process').execFile;

export var ExecuteExe = function (name, args, callback) {
  exec('name', function (err, data) {
    console.log(err)
    console.log(data.toString());
    callback(data);
  });
}
