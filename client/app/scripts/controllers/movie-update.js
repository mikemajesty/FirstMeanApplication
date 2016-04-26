'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieUpdateCtrl
 * @description
 * # MovieUpdateCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieUpdateCtrl', function ($scope, $routeParams, Movie, $location) {
    $scope.editMovie = true;
    $scope.movie = {};

    Movie.one($routeParams.id).get().then((movie) =>{
      $scope.movie = movie;
      $scope.saveMovie = () => {
        $scope.movie.save().then( () => {
          $location.path('/movie/'+$routeParams.id);
        });
      };
    });
  });
