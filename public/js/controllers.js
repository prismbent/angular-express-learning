'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

    $http({
      method: 'GET',
      url: '/api/characters'
    }).
    success(function (data, status, headers, config) {
      $scope.characters = data.characters;
    }).
    error(function (data, status, headers, config) {
      $scope.characters = 'Error!';
    });

    $scope.getCharacter = function(character){
      $scope.character = character; 
    }

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  }).
  controller('CharacterCtrl', function ($scope) {

  });
