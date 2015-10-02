// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('jobscaper', ['ionic', 'restangular', 'jobscaper.controllers'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('mongodb://heroku_8rfgzwt8:j4gtpfbdk21m8f2b34obklesn1@ds033153.mongolab.com:33153/heroku_8rfgzwt8/api');
    RestangularProvider.setRestangularFields({
      id: '_id'
    });

    $stateProvider

      .state('app', {
        url: '',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'AppController'
      })

      //.state('app.search', {
      //  url: '/search',
      //  views: {
      //    'menuContent': {
      //      templateUrl: 'templates/search.html'
      //    }
      //  }
      //})


      .state('app.jobs', {
        url: '/jobs',
        views: {
          'menuContent': {
            templateUrl: 'templates/job-list.html',
            controller: 'JobListController'
          }
        }
      })
      .state('app.job', {
        url: '/job/:jobId',
        views: {
          'menuContent': {
            templateUrl: 'templates/job.html',
            controller: 'JobController'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/jobs');
  });
