'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
        controllerAs: 'movieAdd'
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
        controllerAs: 'movieView'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
        controllerAs: 'movieView'
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl',
        controllerAs: 'movieEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).factory('MovieRestangular',(Restangular)=> {
      return Restangular.withConfig((RestangularConfigure)=>{
        RestangularConfigure.setRestangularFields({
          id: '_id'
        });
      });
  }).factory('Movie', (MovieRestangular) => {
      return MovieRestangular.service('movie');
  });
