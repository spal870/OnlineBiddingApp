(function(){
    angular.module('angulargen')
    .controller('ProductController',ProductController);
    
     function ProductController(productService) {
        var vm = this;
        vm.title = 'ProductController';

        activate();

        function activate() {
            
            
          vm.createNewsale= function (newProduct){
                productService.createNewSale(newProduct);
            }
          vm.reset=function(){
              vm.newProduct={};
          }
        }
         
    }
})();