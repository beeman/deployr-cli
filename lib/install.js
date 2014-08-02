
'use strict';

var cfg = require('./config');
var fnc = require('./functions');

function run() {

  console.log('\nInstallation\n');

  if (fnc.fileExists(cfg.rootDir)) {
    console.log('Target already exists:', cfg.rootDir);
  } else {
    var dirs = [cfg.editionsDir, cfg.sitesDir, cfg.webrootDir];
    for (var i = 0; i < dirs.length; i++) {
      fnc.makeDir(dirs[i]);
    }
  }

}

exports.run = run;
