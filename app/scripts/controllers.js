angular.module('jobscaper.controllers', [])

  .controller('AppController', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});


    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('JobListController', function ($scope) {
    $scope.jobs = [
      {
        id: 1,
        name: '1910 Harrold St'
      },
      {
        id: 2,
        name: '2603 McGregor'
      },
      {
        id: 3,
        name: '11812 Tedford'
      },
      {
        id: 4,
        name: '666 UrMoms Hs'
      }
    ];
  })

  .controller('JobController', function ($scope, $stateParams) {

    $scope.job = {
      id: 1,
      name: '1910 Harrold St',
      clientContact: {
        name: 'Billy Joe Philmore',
        phone: '512 555 1212',
        address1: '1920 Harrold St',
        city: 'Austin',
        state: 'Tx',
        zip: '78704'
      },
      overview: 'Morbi in euismod urna, vitae congue odio. Nullam in interdum enim. Vestibulum tristique placerat felis, eget facilisis justo accumsan non. Curabitur a libero interdum, vestibulum ipsum eu, laoreet quam. Nunc in dapibus velit. Maecenas ac neque leo.',
      tasks: [
        {
          id: 1,
          complete: true,
          name: 'Concrete Pathway',
          materials: [
            {
              name: 'bag of cement',
              quantity: 14
            },
            {
              name: 'Gallon of stain',
              quantity: 2
            }
          ]
        },
        {
          id: 2,
          complete: false,
          name: 'Cedar Fence',
          materials: [
            {
              name: '8\' metal post',
              quantity: 18
            },
            {
              name: '8x4 cedar picket',
              quantity: 266
            },
            {
              name: 'bag of cement',
              quantity: 22
            },
            {
              name: 'Gallon of stain',
              quantity: 4
            }
          ]
        }
      ]
    }

  });
