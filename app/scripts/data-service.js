(function () {
  'use strict';
  angular.module('jobscaper')
    .factory('DataService', [
      'Restangular',

      function (Restangular) {

        var
          _endpoint = 'jobs',
          _base = Restangular.all(_endpoint);

        var
          publicApi = {
            getOrgData: function (id) {
              return _base.getList().then(function (jobs) {
                return _.findWhere(jobs,{_id:id});
              })
            }
          };
        return publicApi;
      }
    ]);
})();
