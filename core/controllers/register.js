'use strict';
app.controller('RegisterCtrl', function($scope,$rootScope,$location,$q,$auth,$filter,$state,$localStorage,UsersService ) {

    $scope.name = null;
    $scope.user = null;
    $scope.pass = null;
    $scope.deserr = "";
    $scope.showerror=false;
    
    
    $scope.register = function() {
        if ($scope.loginForm.$valid) {
            var user = {
                description: $scope.name,
                email: $scope.user,
                password: $scope.pass
            };
            UsersService.store(user).then(function(data){
                var dr = data.data;
                if (dr.success){
                    $rootScope.showAlert (dr.type, dr.message);
                    $auth.login(user).then(function(d) {
                        if (d.status==200){
                            $auth.setToken(d.data.data.token);
                            $localStorage.user =  d.data.data.user;
                            $rootScope.getUserinfo();
                            $state.go('wallet');
                        }else if (d.status==401){
                            $scope.showerror=true;
                            $scope.deserr = d.data.message;
                        }
                    }).catch(function(d) {
                        $scope.showerror=true;
                        $scope.deserr = d.data.message;
                    });
                }else if (dr.status==401){
                    $scope.showerror=true;
                    $scope.deserr = dr.data.message;
                }
            }).catch(function(dr){
                $scope.showerror=true;
                $scope.deserr = dr.data.message;
            });
         }else {
            $scope.showerror=true;
            $scope.deserr = $filter('translate')('requiredallFields');
         }  
          
      }
    
   

});
