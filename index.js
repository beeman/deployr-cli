/*jslint node: true */

'use strict';

var app = require('./lib/app');
var program = require('commander');
var inquander = require('inquander');

program.version('0.0.1');

program
  .command('project [action]')
  .description('Manage projects')
  .action(function(action) {
    app.manageProject(action);
  });

program
  .command('target [action] [id] ')
  .description('Manage targets')
  .action(function(action, id) {
    app.manageTarget(action, id);
  });

program
  .command('repository [action]')
  .description('Manage repositories')
  .action(function(action) {
    app.manageRepository(action);
  });

program
  .command('deployment [action]')
  .description('Manage deployments')
  .action(function(action) {
    app.manageDeployment(action);
  });

program
  .command('info')
  .description('Show configuration')
  .action(function() {
    app.showConfig();
  });





inquander.parse(program, process.argv, {
  message: 'Make a choice below',
  defaultCommand: 'projects',
  overrides: {
    'action': {
      type: 'list',
      choices: ['list']
    }
  }
});
