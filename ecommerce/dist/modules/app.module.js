 
var appModule = angular.module('ecommerce', ['ngRoute']);
appModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/auth', {
            templateUrl: 'views/login.html', // Template for the home route
            controller: 'AuthController', // Controller for the home route
            controllerAs: 'AuthCtrl' // Use 'homeCtrl' as alias for the controller instance
        })
            .when('/signup', {
            templateUrl: 'views/signup.html', // Template for the home route
            controller: 'AuthController', // Controller for the home route
            controllerAs: 'AuthCtrl' // Use 'homeCtrl' as alias for the controller instance
        })
            .when('/product', {
            templateUrl: 'views/catalogs.html', // Template for the about route
            controller: 'ProductController', // Controller for the about route
            controllerAs: 'ProductCtrl' // Use 'aboutCtrl' as alias for the controller instance
        })
            .when('/product/:productId', {
            templateUrl: 'views/details.html',
            controller: 'ProductController'
        })
            .when('/cart', {
            templateUrl: 'views/cart.html', // Template for the about route
            controller: 'ShoppingCartController', // Controller for the about route
            controllerAs: 'CartCtrl' // Use 'aboutCtrl' as alias for the controller instance
        })
            .when('/thank-you', {
            templateUrl: 'views/thank-you.html', // Template for the about route
            controller: 'ThankYouController', // Controller for the about route
            controllerAs: 'ThankCtrl' // Use 'aboutCtrl' as alias for the controller instance
        })
            .otherwise({
            redirectTo: 'product' // Default route is home
        });
    }]);
appModule.service('Authservice', Authservice);
appModule.service('ProductService', ProductService);
appModule.service('CartService', CartService);
appModule.service('CheckoutService', CheckoutService);
appModule.controller('ProductController', ProductController);
appModule.controller('AuthController', AuthController);
appModule.controller('ShoppingCartController', ShoppingCartController);
appModule.controller('ThankYouController', ThankYouController);
