(function () {
    'use strict';

    angular
        .module('angulargen')
        .factory('productService', productService);

    /** @ngInject */
    function productService($log, $http) {
        //var apiHost = 'http://10.209.41.33/AuctionWebApi/api';
        var apiHost = 'http://10.209.233.37/acutionapi';

        var service = {
            apiHost: apiHost
            , getProducts: getProducts
            , getDummyProducts: getDummyProducts
            ,createNewSale:createNewSale
        };

        return service;

        function getProducts() {
            return $http.get(apiHost+"/api/product")
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
            var newSale={
                ProductName:newProduct.productName,
                ProductDescription:newProduct.productDescription,
                ProductImageUrl:newProduct.productImage,
                BidBasePrice:newProduct.productPrice,
                BidStartDateTime:newProduct.bidStartTime,
                BidEndDateTime:newProduct.bidEndTime,
                ProductTypeId:newProduct.productType.prodTypeId
            };
            return $http.post("http://10.209.233.37/acutionapi/Api/product",JSON.stringify(newSale)).then(function(response){
                debugger;
                console.log("new sale created");
            })
        }
        
//        function createNewBid(newProduct){
//            return $http.post(apiHost+"",newProduct).then(function(response){
//                debugger;
//                console.log("new bid created");
//            })
//        }
//        

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