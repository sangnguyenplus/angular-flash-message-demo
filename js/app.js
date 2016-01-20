var app = angular.module('appDemo', [
  'ui.router',
  'angular-flash.service',
  'angular-flash.flash-alert-directive'
])

.config(['flashProvider', function (flashProvider) {

  flashProvider.errorClassnames.push('alert-danger');
  flashProvider.warnClassnames.push('alert-warning');
  flashProvider.infoClassnames.push('alert-info');
  flashProvider.successClassnames.push('alert-success');

}])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html'
            })
            .state('success-page', {
                url: '/success-page.html',
                templateUrl: 'views/success.html',
                controller: 'SuccessController'
            })
            .state('error-page', {
                url: '/error-page.html',
                templateUrl: 'views/error.html',
                controller: 'ErrorController'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $locationProvider.hashPrefix('!');
    }
])

.controller('SuccessController', ['$scope', '$http', 'flash', function($scope, $http, flash) {
    flash.success = 'Bạn đã được chuyển hướng tới trang thông báo thành công. Thông báo này sẽ tự mất sao vài giây!';
}])
.controller('ErrorController', ['$scope', '$http', 'flash', function($scope, $http, flash) {
    flash.error = 'Bạn đã được chuyển hướng tới trang thông báo lỗi. Thông báo này sẽ tự mất sao vài giây!';
}]);

