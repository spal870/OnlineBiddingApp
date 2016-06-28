(function () {
    'use strict';

    angular
        .module('angulargen')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/'
                , templateUrl: 'app/main/main.html'
                , controller: 'MainController'
                , controllerAs: 'main'
            }).state('about', {
                url: '/about'
                , templateUrl: 'app/about/about.html'
                , controller: 'AboutController'
                , controllerAs: 'about'
            }).state('addNewSale', {
                url: '/newSale'
                , templateUrl: 'app/products/addNewSaleForm.html'
                , controller: 'ProductController'
                , controllerAs: 'product'
            });

        $urlRouterProvider.otherwise('/');

    }

})();