'use strict';
window.app_version = 1.1;
var app =angular.module('astorgameApp', ['astorgameApp.models',
        'ngSanitize',
        'ui.router',
        'ngRoute',
        'satellizer',
        'ngMaterial', 
        'ngMessages',
        'pascalprecht.translate',
        'ngStorage',
        'md.data.table',
        'angularMoment',
        'monospaced.qrcode'
]);
var appModels = angular.module('astorgameApp.models', []);

app.run(['$rootScope', '$timeout', '$location','$state','$auth', '$localStorage','$translate','$mdDialog' ,'$filter',
    function ($rootScope,$timeout,$location,$state,$auth,$localStorage,$translate, $mdDialog,$filter ) {

        $rootScope.userinfo=null;
        
        $rootScope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };
        $rootScope.getUserinfo= function() {
             $rootScope.userinfo= $localStorage.user;
        };
        $rootScope.cerrarSesion = function() {
            $auth.logout().then(function() {
                $rootScope.userinfo=null;
                delete $localStorage.user;
                $state.go('/');
            });
        };

        var originatorEv;
        $rootScope.openMenu = function($mdMenu, ev) {
            originatorEv = ev;
            $mdMenu.open(ev);
        };
        $rootScope.changeLanguage = (function (l) {
			$translate.use(l);			
        });
        $rootScope.showAlert = function(tit,text) {
            $mdDialog.show(
              $mdDialog.alert()
                .clickOutsideToClose(true)
                .title(tit)
                .textContent(text)
                .ariaLabel('Alert Dialog')
                .ok($filter('translate')('ok'))
            );
        };

    }
]);






