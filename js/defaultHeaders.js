var app = angular.module('parseQ');

    app.factory('httpRequestInterceptor', function () {
      return {
        request: function (config) {
          config.headers = {'X-Parse-Application-Id': '2WEhfQC8lXVvxtwGYlQInk8zRzQOfmMLCvJwxgPV', 'X-Parse-REST-API-Key': 'J0zhuUvMCvUpvit43J69Z5n939T3UkyshCAAq8zf'}
          return config;
        }
      };
    });


    