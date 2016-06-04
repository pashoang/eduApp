// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    /* .state('tab', {
    //url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  }) */

  // Each tab has its own nav history stack:
	
  .state('home', {
    url: '/home',
		//template: '<ion-header-bar></ion-header-bar><ion-content><h1>My Contacts</h1></ion-content>'
     views: {
      'content-view': {
        template: '<h1>view</h1>',
        //controller: 'DashCtrl'
      },
			'footer': {
        template: '<h1>footer</h1>',
        //controller: 'DashCtrl'
      },
			'iview': {
        template: '<h1>iview</h1>',
        //controller: 'DashCtrl'
      }
    }
  })
	$urlRouterProvider.otherwise('/home');
})


.controller('GreetController', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.name = 'World';
  $rootScope.department = 'Angular';
}])
.controller('ListController', ['$scope', function($scope) {
  $scope.names = ['Igor', 'Misko', 'Vojta'];
}])

.controller('Controller', ['$scope', function($scope) {
  $scope.lang = "en";
	$scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}])

.directive('myCustomer', function() {
  
	return {
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
});



