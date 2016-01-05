import angular = require('angular');
import HomeController = require('controllers/HomeController');

var app = angular.module('app', [])
    .controller('HomeController', HomeController)

export = app;


