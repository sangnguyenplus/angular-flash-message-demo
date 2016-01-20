angular.module('appRoutes', [])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider,$locationProvider){
        $stateProvider
            .state('home', {
              url: '/',
              templateUrl: 'views/home.html',
              controller: 'HomeController'
            });
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
        $locationProvider.hashPrefix('!');
    }
]);
