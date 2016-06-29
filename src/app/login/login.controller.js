(function () {
    'use strict';

    angular
        .module('angulargen')
        .controller('LoginController', LoginController);

    
    function LoginController($location, AuthenticationService,FlashService,$timeout, webDevTec, toastr) {
        var vm = this;
        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1466587298398;
        vm.showToastr = showToastr;
        vm.message='';
        vm.hide=true;
        activate();

        function activate() {
            getWebDevTec();
            $timeout(function() {
            vm.classAnimation = 'rubberBand';
            }, 4000);
        }

        function showToastr() {
//            toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
//            
            vm.classAnimation = '';
        }

        function getWebDevTec() {
            vm.awesomeThings = webDevTec.getTec();

            angular.forEach(vm.awesomeThings, function(awesomeThing) {
            awesomeThing.rank = Math.random();
        });
        }
        vm.login = login;
        

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/home');
                } else {
                    //FlashService.Error(response.message);
                    vm.message = response.message;
                    vm.hide=false;
                    vm.dataLoading = false;
                }
            });
        }
    }

})();
