(function () {
    'use strict';

    angular
        .module('angulargen')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, $rootScope, $location) {
//        var path = function () {
//            $location.path();
//        };
//        $rootScope.$watch(path,function(newVal,oldVal){
//            $rootScope.activetab = newVal;
//        });
        $log.debug('runBlock end');
    }

})();