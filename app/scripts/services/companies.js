'use strict';

/**
 * @ngdoc service
 * @name diversityvisApp.companies
 * @description
 * # companies
 * Service in the diversityvisApp.
 */
angular.module('diversityvisApp')
  .service('companies', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
      var service = this;
      this.companies  =[
        {
          "company": "Amazon",
          "metrics": [
            {
              "name": "gender",
              "values": [              {
                  "label": "male",
                  "count": "63"
                },
                {
                  "label": "female",
                  "count": "37"
                },
                {
                  "label": "other",
                  "note": "no data",
                  "count": "0"
                }
              ]
            },

            {
              "name": "ethnicity",
              "values": [
                {
                  "label": "white",
                  "count": "60"
                },
                {
                  "label": "black",
                  "count": "15"
                },
                {
                  "label": "asian",
                  "count": "13"
                },
                {
                  "label": "hispanic",
                  "count": "9"
                },
                {
                  "label": "other",
                  "count": "3"
                }
              ]
            }
          ]
        },
        {
          "company": "Apple",
          "metrics": [
            {
              "name": "gender",
              "values": [
                {
                  "label": "male",
                  "count": "69"
                },
                {
                  "label": "female",
                  "count": "31"
                },
                {
                  "label": "other",
                  "note": "no data",
                  "count": "0"
                }
              ]
            },
            {
              "name": "ethnicity",
              "values": [
                {
                  "label": "white",
                  "count": "54"
                },
                {
                  "label": "black",
                  "count": "8"
                },
                {
                  "label": "asian",
                  "count": "18"
                },
                {
                  "label": "hispanic",
                  "count": "11"
                },
                {
                  "label": "multiracial",
                  "count": "2"
                },
                {
                  "label": "other",
                  "count": "1"
                },
                {
                  "label": "undeclared",
                  "count": "6"
                }
              ]
            }
          ]
        }
      ];
      this.getCompanies = function(){
        return service.companies;
      }
  });
