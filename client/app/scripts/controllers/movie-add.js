'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieAddCtrl', function ($scope, Movie,$location) {
      $scope.movie = {};
      $scope.saveMovie = () =>{
        Movie.post($scope.movie).then(() =>{
          $location.path('/movies');
        }); 
      };
  });
