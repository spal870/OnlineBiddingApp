(function () {
    'use strict';

    angular
        .module('angulargen')
        .factory('productService', productService);

    /** @ngInject */
    function productService($log, $http) {
        var apiHost = 'http://10.209.41.33/AuctionWebApi/api';

        var service = {
            apiHost: apiHost
            , getProducts: getProducts
            , getDummyProducts: getDummyProducts
            ,createNewSale:createNewSale
        };

        return service;

        function getProducts() {

            return $http.get(apiHost+"/product")
                .then(getProductsComplete)
                .catch(getProductsFailed);

            function getProductsComplete(response) {
                return response.data;
            }

            function getProductsFailed(error) {
                $log.error('XHR Failed for getProducts.\n' + angular.toJson(error.data, true));
            }
        }
        
        function createNewSale(newProduct){
            return $http.post(apiHost+"",newProduct).then(function(response){
                debugger;
                console.log("new sale created");
            })
        }
        

        function getDummyProducts() {
            var products = [{
                name: 'HP laptop'
                , price: '60000'
                , status: 'Instock'
      }, {
                name: 'Apple Iphone'
                , price: '75000'
                , status: 'Soldout'
      }, {
                name: 'IBM server'
                , price: '160000'
                , status: 'Instock'
      }, {
                name: 'CISCO router'
                , price: '360000'
                , status: 'Instock'
      }, {
                name: 'Juniper resources'
                , price: '5000'
                , status: 'Soldout'
      }]

            return products;
        }
    }
})();