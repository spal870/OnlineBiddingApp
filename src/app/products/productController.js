(function () {
    angular.module('angulargen')
        .controller('ProductController', ProductController);

    function ProductController(productService,toastr) {
        var vm = this;
        vm.title = 'ProductController';

        activate();

        function activate() {


            vm.createNewsale = function (newProduct) {
                productService.createNewSale(newProduct).then(function(){
                    //toastr.success("New Sale Created!");
                    //vm.newProduct={};
                },function(){
                   // toastr.error("New Sale Creation Failed!")
                });
            }
            vm.reset = function () {
                vm.newProduct = {};
            }
            vm.openDatePickers = [];
            vm.open = function ($event, datePickerIndex) {
                $event.preventDefault();
                $event.stopPropagation();

                if (vm.openDatePickers[datePickerIndex] === true) {
                    vm.openDatePickers.length = 0;
                } else {
                    vm.openDatePickers.length = 0;
                    vm.openDatePickers[datePickerIndex] = true;
                }
            };
            
            vm.productTypes=[{prodTypeId:1,prodTypeDescription:"Electronics"},
                            {prodTypeId:2,prodTypeDescription:"Clothing"},
                            {prodTypeId:3,prodTypeDescription:"Sports"},
                            {prodTypeId:4,prodTypeDescription:"Furniture"}]
                
            
        }

    }
})();