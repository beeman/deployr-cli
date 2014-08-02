/*jslint node: true, indent: 2 */

'use strict';

var fs = require('fs');
var os = require('os');
var mkdirp = require('mkdirp');

exports.makeDir = function(dir) {
  mkdirp(dir, function(err) {
    if (err) {
      console.error(err);

    } else {
      console.log('Created directory', dir);
    }
  });
};

exports.writeFile = function(file, content) {
  fs.writeFile(file, content, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('The file was saved:', file);
    }
  });
};

exports.fileExists = function(file) {
  if (fs.exists(file)) {
    return true;
  }
  return false;
};

exports.pretty = function(json) {
  return JSON.stringify(json, null, 2);
};

exports.checkRequirements = function() {
  if (os.platform() !== 'linux') {
    console.log('Please run this application on a Linux machine');
    process.exit(1);
  } else {
    console.log('Running on', os.type(), os.arch(), os.release());
  }
};
