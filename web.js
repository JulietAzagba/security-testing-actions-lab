const { exec } = require('child_process');
function runCmd(userArg) {
  // similar risk to Python's os.system
  exec(`echo ${userArg}`, (err, out) => { if (err) console.error(err); });
}
function riskyEval(s) { return eval(s); }
runCmd(process.argv[2]);
