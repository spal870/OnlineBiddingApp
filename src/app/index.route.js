(function () {
    'use strict';

    angular
        .module('angulargen')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('welcome', {
                url: '/'
                , templateUrl: 'app/main/main.html'
                , controller: 'MainController'
                , controllerAs: 'main'
            })
            .state('about', {
                url: '/about'
                , templateUrl: 'app/about/about.html'
                , controller: 'AboutController'
                , controllerAs: 'about'
            }).state('login', {
                url : '/login',
                templateUrl  : 'app/login/login.html',
                controller   : 'LoginController',
                controllerAs : 'vm'
            }).state('register', {
                url : '/register',
                templateUrl  : 'app/register/register.html',
                controller   : 'RegisterController',
                controllerAs : 'vm'
            }).state('addNewSale', {
                url: '/newSale'
                , templateUrl: 'app/products/addNewSaleForm.html'
                , controller: 'ProductController'
                , controllerAs: 'product'
            }).state('addNewBid', {
                url: '/productBid'
                , templateUrl: 'app/products/productBid.html'
                , controller: 'ProductController'
                , controllerAs: 'product'
            });

       

    }

})();