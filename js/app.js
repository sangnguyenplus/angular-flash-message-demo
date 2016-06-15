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
                templateUrl: './angular-flash-message-demo/views/home.html'
            })
            .state('success-page', {
                url: 'success-page.html',
                templateUrl: './angular-flash-message-demo/views/success.html',
                controller: 'SuccessController'
            })
            .state('error-page', {
                url: 'error-page.html',
                templateUrl: './angular-flash-message-demo/views/error.html',
                controller: 'ErrorController'
            })
            .state('info-page', {
                url: 'info-page.html',
                templateUrl: './angular-flash-message-demo/views/info.html',
                controller: 'InfoController'
            })
            .state('warning-page', {
                url: 'warning-page.html',
                templateUrl: './angular-flash-message-demo/views/warning.html',
                controller: 'WarningController'
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
}])
.controller('InfoController', ['$scope', '$http', 'flash', function($scope, $http, flash) {
    flash.info = 'Bạn đã được chuyển hướng tới trang thông báo hiển thị thông tin. Thông báo này sẽ tự mất sao vài giây!';
}])
.controller('WarningController', ['$scope', '$http', 'flash', function($scope, $http, flash) {
    flash.warn = 'Bạn đã được chuyển hướng tới trang thông báo dạng warning. Thông báo này sẽ tự mất sao vài giây!';
}]);

