(function () {
    'use strict';

    angular
        .module('angulargen')
        .factory('UserService', UserService);

    //erService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get('http://10.209.41.33/AuctionWebApi/api/user').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('http://10.209.41.33/AuctionWebApi/api/user/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
//            return $http({
//                method: 'JSONP',
//                url: 'http://10.209.41.33/AuctionWebApi/api/user/GetName/' + username
//                }).then(handleSuccess, handleError('Error getting user by username'));

            
            return $http.get('http://10.209.18.233:9000/users?username=' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user) {
           return $http.post('http://10.209.18.233:9000/users', user)
               .then(function(response)
                     {
                        console.log("Success"); 
                        return response;
                     }, 
                     function(response)
                     {
                        console.log(response.statusText) ; 
                        return response.status;
                     });
//            $http.post("http://10.209.41.33/AuctionWebApi/api/User", user).then(function (response) {
//
//            return response;
//        },
//         function (response) {
//             var errors = [];
//             for (var key in response.data.modelState) {
//                 for (var i = 0; i < response.data.modelState[key].length; i++) {
//                     errors.push(response.data.modelState[key][i]);
//                 }
//             }
//             return errors;
//         });
//            
            
        }

        function Update(user) {
            return $http.put('http://10.209.41.33/AuctionWebApi/api/user/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('http://10.209.41.33/AuctionWebApi/api/user/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();