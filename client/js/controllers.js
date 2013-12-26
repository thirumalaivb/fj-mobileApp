'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        }
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
    }])
    .controller('EmployeeListCtrl', ['$scope', 'Employee', function ($scope, Employee) {
        $scope.employees = Employee.query();
    }])
    .controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Employee', function ($scope, $routeParams, Employee) {
        $scope.employee = Employee.get({employeeId: $routeParams.employeeId});
    }])
    .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        $scope.employees = Report.query({employeeId: $routeParams.employeeId});
    }])
	
    
	.controller('HomeCtrl', ['$scope',function ($scope) {
        $scope.message = 'Home'
    
	}])
	.controller('CategoryListCtrl', ['$scope', 'Category',function ($scope, Category) {
        $scope.message = 'Categories List';
        	 $scope.categories = Category.query();
    }])
    
    .controller('SubCategoryListCtrl', ['$scope', 'Category',function ($scope, Category) {
          	 $scope.categories = Category.query();
    }])
    
    .controller('ProductListCtrl', ['$scope',function ($scope) {
        $scope.message = 'Product List'
    }])
    
    .controller('ProductDetailCtrl', ['$scope',function ($scope) {
    $scope.message = 'Product Detail'
    }])
    
    .controller('CartCtrl', ['$scope',function ($scope) {
    $scope.message = 'Shopping Cart'
    }])
    
    .controller('CheckOutCtrl', ['$scope',function ($scope) {
    $scope.message = 'Check Out'
    }])
    
	.controller('OrderHistoryCtrl', ['$scope',function ($scope) {
    $scope.message = 'Order History'
    }])
        
	.controller('OrderDetailCtrl', ['$scope',function ($scope) {
    $scope.message = 'Order Detail'
    }])
        
	.controller('FavouritiesCtrl', ['$scope',function ($scope) {
    $scope.message = 'Favourities'
    }])
        
    .controller('SkinnyCtrl', ['$scope',function ($scope) {
    $scope.message = 'demo'
    }])
    
	.controller('ContactUsCtrl', ['$scope',function ($scope) {
    $scope.message = 'Contact Us'
    }]);
