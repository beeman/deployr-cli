'use strict';

var rest = require('restler');
var config = require('./config');

var apiUrl = config.apiUrl;


function listProjects(cb) {
  rest.get(apiUrl + '/projects').on('complete', cb);
}

function listTargets(cb) {
  rest.get(apiUrl + '/targets').on('complete', cb);
}

function listRepositories(cb) {
  rest.get(apiUrl + '/repositories').on('complete', cb);
}

function listDeployments(cb) {
  rest.get(apiUrl + '/deployments').on('complete', cb);
}

function getTarget(id, cb) {
  rest.get(apiUrl + '/targets/' + id).on('complete', cb);
}


exports.listProjects = listProjects;
exports.listTargets = listTargets;
exports.listRepositories = listRepositories;
exports.listDeployments = listDeployments;
exports.getTarget = getTarget;
