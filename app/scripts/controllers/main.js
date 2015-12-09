'use strict';

/**
 * @ngdoc function
 * @name afireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the afireApp
 */
angular.module('afireApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
