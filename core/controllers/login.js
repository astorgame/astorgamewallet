'use strict';
app.controller('LoginCtrl', function($scope,$rootScope,$location, $state,$q,$auth,$localStorage ) {

    $scope.user = null;
    $scope.pass = null;
    $scope.deserr = "";
    $scope.loginFailed=false;

    $scope.login = function() {
        if ($scope.loginForm.$valid) {
            var user = {
                email: $scope.user,
                password: $scope.pass
            };
            $auth.login(user).then(function(d) {
                if (d.status==200){
                    $auth.setToken(d.data.data.token);
                    $localStorage.user =  d.data.data.user;
                    $rootScope.getUserinfo();
                    $state.go('wallet');
                }else if (d.status==401){
                    $scope.loginFailed=true;
                    $scope.deserr = d.data.message;
                }
            }).catch(function(d) {
                $scope.loginFailed=true;
                $scope.deserr = d.data.message;
            });
        }
    };

});
