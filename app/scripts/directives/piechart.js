'use strict';

/**
 * @ngdoc directive
 * @name diversityvisApp.directive:pieChart
 * @description
 * # pieChart
 */
angular.module('diversityvisApp')
  .directive('pieChart', function () {
    return {
      templateUrl: 'views/piechart.html',
      restrict: 'E',
      scope: {
        model: "=",
      },
      link: function postLink(scope, element, attrs) {
        //element.text('this is the pieChart directive');

        var width = 240;
        var height = 240;
        var radius = Math.min(width, height) / 2;
        var color = d3.scale.category20b();
        var svg = d3.select(element[0])
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');
        var arc = d3.svg.arc()
            .outerRadius(radius);
        var pie = d3.layout.pie()
            .value(function(d) { return d.count; })
            .sort(null);

        var path = svg.selectAll('path')
            .data(pie(scope.model))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d, i) {
              return color(d.data.label);
            });
      }
    };
  });
