
'use strict';

var cfg = require('./config');
var fnc = require('./functions');


function checkTarget(target) {
  switch(target.type) {
    case 'local':


    if (fnc.fileExists(target.path)) {
      console.log('Target exists:', target.path);
    } else {
      console.log('Target does not exist:', target.path);
    }


      break;
    default:
      console.log('Unknown type:', target.type);
      break;
  }
  console.log(target);
}
exports.checkTarget = checkTarget;
