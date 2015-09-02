'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
 .controller('MoviesCtrl', function ($scope,Movie) {
 	$scope.Movie = true;
 	$scope.movies = Movie.getList().$object;
 	 // $scope.$on("$stateChangeSuccess", function() {
   //      $scope.tabs.forEach(function(tab) {
   //          tab.active = $scope.active(tab.route);
   //      });
   //  });
 });
