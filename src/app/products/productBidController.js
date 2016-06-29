(function() {
    'use strict';

    angular
        .module('angulargen')
        .controller('ProductBidController', ProductBidController);

    /* @ngInject */
    function ProductBidController(productService) {
        var vm = this;
        vm.title = 'ProductBidController';

        activate();

        function activate() {
            productService.getProducts().then(function(result)
            {
                vm.products=result;
            })
        }
    }
})();



//(function(){
//    angular.module('angulargen')
//    .controller('ProductBidController',ProductBidController);
//    
//     function ProductBidController(productService) {
//        var vm = this;
//        vm.title = 'ProductController';
//
//        activate();
//
//        function activate() {
//            
//            
//          vm.createNewBid= function (newProduct){
//                productService.createNewBid(newProduct);
//            }
//          vm.reset=function(){
//              vm.newProduct={};
//          }
//        }
//         
//    }
//})();


