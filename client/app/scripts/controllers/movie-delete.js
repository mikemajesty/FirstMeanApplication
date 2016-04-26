'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieDeleteCtrl', function ($scope, $routeParams, Movie, $location) {
     $scope.movie = Movie.one($routeParams.id).get().$object;
     $scope.deleteMovie = () => {
       $scope.movie.remove().then( () => {
         $location.path('/movies');
       });
     };
     $scope.back = () => {
       $location.path('/movie/'+$routeParams.id);
     };
    });
