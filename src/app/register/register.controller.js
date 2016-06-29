(function () {
    'use strict';

    angular
        .module('angulargen')
        .controller('RegisterController', RegisterController);
    
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var vm = this;
        vm.register = register;
        vm.message='';
        
        function register() {
            vm.dataLoading = true;
            vm.user.CreatedDate = '2016-06-28';
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        //FlashService.Success('Registration successful', true);
                        $location.path('/home');
                    } else {
                        //FlashService.Error(response.message);
                        vm.message = response.message;
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();
