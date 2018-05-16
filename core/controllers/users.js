'use strict';
app.controller('UserCtrl', function($scope, $rootScope ,$state,$location, $timeout, $q, $auth,$filter, $mdDialog, UsersService) {
    if( !$auth.isAuthenticated() ){
        $state.go('login');
    }
    $rootScope.getUserinfo();
    $scope.name = null;
    $scope.user = null;
    $scope.pass = null;
    $scope.user={};

    $scope.deserr = "";
    $scope.showerror=false;

      $scope.getUser = function(id_) {
            UsersService.get(id_).then(function(response){
                $scope.user = response.data.data;
            }).catch(function(err){
                $scope.showerror=true;
                $scope.deserr = err.message;
            });
      };
      $scope.update = function() {
            if( !$auth.isAuthenticated() ){
                $state.go('login');
            }
            var user = {
                id: $rootScope.userinfo.id,
                description: $rootScope.userinfo.description
            };
            UsersService.update(user).then(function(data){
                var d = data.data;
                $rootScope.showAlert (d.type, d.message);
            }).catch(function(err){
                $scope.showerror=true;
                $scope.deserr = err.message;
            });
      };

})
