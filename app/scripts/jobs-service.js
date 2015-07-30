(function () {
  'use strict';
  angular.module('jobscaper')
    .factory('JobsService', [
      'Restangular',

      function (Restangular) {

        var
          _endpoint = 'jobs',
          _baseJobs = Restangular.all(_endpoint);

        var
          publicApi = {
            getAll: function () {
              return _baseJobs.getList();
            },
            get: function (id) {
              return _baseJobs.getList().then(function (jobs) {
                return _.findWhere(jobs,{_id:id});
              })
            }
          };
        return publicApi;
      }
    ]);
})();
