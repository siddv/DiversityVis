'use strict';

/**
 * @ngdoc function
 * @name diversityvisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the diversityvisApp
 */
angular.module('diversityvisApp')
  .controller('MainCtrl', function (companies) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.companies = companies.getCompanies();

  });
