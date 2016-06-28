(function () {
    'use strict';
    angular.module('angulargen')
        .directive('newSale', newSaleDir);

    function newSaleDir() {
        return {
            restrict: 'E'
            , templateUrl: ''
            , data: "="
        }

    }
})();