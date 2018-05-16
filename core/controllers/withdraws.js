'use strict';
app.controller('WithdrawCtrl', function($scope,$rootScope,$location,$q,$auth,$filter,$state,$localStorage,WalletsService ) {
    if( !$auth.isAuthenticated() ){
        $state.go('login');
    }
    $rootScope.getUserinfo();
    $scope.deserr = "";
    $scope.showerror=false;
    $scope.selected = [];
    $scope.retiro={};
    $scope.ls_wallets={};

    $scope.updateCode = function(item) {
        angular.forEach($scope.ls_wallets, function(selitem){
            if(item ==selitem.id ){
                $scope.selected = selitem;
            }
        });
    }
    $scope.getListSWallets = function(){
        var sdata = {
            sendadress: "",
            monto: 0,
            wallet: $rootScope.activewll
        };
        $scope.retiro =sdata;
        if(  $rootScope.isAuthenticated()  ){
            var query1 = {
                listfbets: 1
            };
            WalletsService.list(query1).then(function(response){
                $scope.ls_wallets =response.data.data;
            },function(response){
                
            });   
       }; 
    };
    $scope.sendCoin = function() {
        if( !$auth.isAuthenticated() ){
            $state.go('login');
        }
        $scope.showerror=false;
        WalletsService.sendcs($scope.retiro).then(function(response){
            var d = response.data;
            if( d.sucess){
                $rootScope.showAlert (d.type,d.message);
            }else{
                $rootScope.showAlert (d.type,d.message);
            }
        }).catch(function(err){
            $scope.showerror=true;
            $scope.deserr = err.data.message;
        });
    };

    $scope.getListSWallets(); 

});
