'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.mobile-menu',
    'myApp.controllers',
    'myApp.memoryServices'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/products', {templateUrl: 'partials/employee-list.html', controller: 'EmployeeListCtrl'});
    $routeProvider.when('/products/:employeeId', {templateUrl: 'partials/employee-detail.html', controller: 'EmployeeDetailCtrl'});
    $routeProvider.when('/products/:employeeId/reports', {templateUrl: 'partials/report-list.html', controller: 'ReportListCtrl'});
	
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/categories', {templateUrl: 'partials/category-list.html', controller: 'CategoryListCtrl'});
    $routeProvider.when('/products1', {templateUrl: 'partials/product-list.html', controller: 'ProductListCtrl'});
    $routeProvider.when('/productdetail', {templateUrl: 'partials/product-detail.html', controller: 'ProductDetailCtrl'});
    $routeProvider.when('/cart', {templateUrl: 'partials/cart.html', controller: 'CartCtrl'});
    $routeProvider.when('/checkout', {templateUrl: 'partials/checkout.html', controller: 'CheckOutCtrl'});
    $routeProvider.when('/orders', {templateUrl: 'partials/order-history.html', controller: 'OrderHistoryCtrl'});
    $routeProvider.when('/orderdetail', {templateUrl: 'partials/order-detail.html', controller: 'OrderDetailCtrl'});
    $routeProvider.when('/favourities', {templateUrl: 'partials/favourities.html', controller: 'FavouritiesCtrl'});
    $routeProvider.when('/contactus', {templateUrl: 'partials/contact-us.html', controller: 'ContactUsCtrl'});
    $routeProvider.when("/skinny", {templateUrl: 'skinny.html', controller: 'SkinnyCtrl'});
    $routeProvider.otherwise({redirectTo: '/products'});
}]);