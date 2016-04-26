'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function () {
    this.movies = [
      {
        title:"A new Hope",
        url: "https://github.com/stephenplusplus/grunt-wiredep/issues/100"
      }
    ];
  });
