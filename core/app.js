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
        $rootScope.$on('$stateChangeStart',
            function (event, toState) {
                 var requiredLogin = false;
                if (toState.data && toState.data.requiredLogin){
                    requiredLogin = true;
                }
                if (requiredLogin && !$auth.isAuthenticated()) {
                    event.preventDefault();
                    $state.go('login');
                }
            }
        );
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

        $rootScope.authenticate = function(provider) {
            $auth.authenticate(provider).then(function(d) {
                if (d.status==200){
                    $rootScope.showAlert ("Success", d.data.message);
                    //$auth.setToken(d.data.data.token);
                    //$localStorage.user =  d.data.data.user;
                   // $rootScope.getUserinfo();
                    //$state.go('wallet');
                }else{
                    $rootScope.showAlert ("Error", d.data.message);
                }
            }).catch(function(error) {
                if(error.message) {
                 //   $rootScope.showAlert ("Error", error.message);
                }else if(error.data) {
                  //  $rootScope.showAlert (error.status, error.data.message);
                }else{
                    //$rootScope.showAlert ("Error", error);
                }
            });
          };

    }
]);






