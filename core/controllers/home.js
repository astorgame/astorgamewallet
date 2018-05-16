'use strict';
app.controller('homeCtrl', function($scope, $rootScope, $location, $stateParams,$timeout, $q, $filter,$mdDialog ) {
    $rootScope.getUserinfo();
    var opcx = $stateParams.game;
    $scope.showerror=false;
    $scope.deserr = ""; 
});
