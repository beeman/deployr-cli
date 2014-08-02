
'use strict';

var cfg = require('./config');
var fnc = require('./functions');


var inquander = require('inquander');

function handleEdition(action) {
  switch (action) {
    case 'list':
      console.log('list editions');
      break;
    case 'add':
      console.log('add edition');

      addEdition();

      break;
    case 'edit':
      console.log('edit edition');
      break;
    default:
      console.log('Unknown action for edition:', action);
      break;
  }
}

function addEdition() {

  console.log('add');


  var p = require('commander');
  var i = require('inquander');

  p.command('hello [name]')
    .action(function(name) {
      console.log('Hello', name);
    });
  p.command('pay [creditcard]')
    .action(function(creditcard) {
      console.log('Please come again.');
      console.log(creditcard);
    });

  i.parse(p, process.argv);
}


exports.handleEdition = handleEdition;
