'use strict';

var cfg = require('./config');
var fnc = require('./functions');

function list() {
  console.log('listing sites');

  console.log(cfg);


}

exports.list = list;
