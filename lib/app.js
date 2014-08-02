'use strict';

var cfg = require('./config');
var fnc = require('./functions');
var api = require('./api');
var target = require('./target');

function showConfig() {
  console.log('\nconfig.json:\n');
  console.log(fnc.pretty(cfg));
}


function manageProject(action) {
  switch (action) {
    case 'list':
      api.listProjects(function(data) {
        console.log(fnc.pretty(data));
      });
      break;
    default:
      console.log('Unknown action for project:', action);
      break;
  }
}

function manageTarget(action, id) {
  switch (action) {
    case 'list':
      api.listTargets(function(data) {
        console.log(fnc.pretty(data));
      });
      break;
    case 'check':
      if(id === undefined) {
        console.error('Please supply target id');
        process.exit(1);
      }
      api.getTarget(id, function(data){
        if(data.error) {
          console.error('error:', data.error.status, data.error.message);
          process.exit(1);
        }
        target.checkTarget(data);
      });
      break;
    default:
      console.log('Unknown action for target:', action);
      break;
  }
}

function manageRepository(action) {
  switch (action) {
    case 'list':
      api.listRepositories(function(data) {
        console.log(fnc.pretty(data));
      });
      break;
    default:
      console.log('Unknown action for repository:', action);
      break;
  }
}

function manageDeployment(action) {
  switch (action) {
    case 'list':
      api.listDeployments(function(data) {
        console.log(fnc.pretty(data));
      });
      break;
    default:
      console.log('Unknown action for deployment:', action);
      break;
  }
}




exports.showConfig = showConfig;
exports.manageProject = manageProject;
exports.manageTarget = manageTarget;
exports.manageRepository = manageRepository;
exports.manageDeployment = manageDeployment;
