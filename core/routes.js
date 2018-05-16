app.config(function($urlRouterProvider,$stateProvider,$locationProvider ) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'views/home.html?v='+window.app_version,
            controller: 'homeCtrl'  
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html?v='+window.app_version,
            controller: 'LoginCtrl'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'views/register.html?v='+window.app_version,
            controller: 'RegisterCtrl'
        })
        .state('wallet', {
            url: '/wallet',
            templateUrl: 'views/wallet.html?v='+window.app_version,
            controller: 'WalletCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html?v='+window.app_version,
            controller: 'homeCtrl'
        })
        ;
       // $locationProvider.html5Mode(true);
      /*  $routeProvider
		.when('/', {
			templateUrl	: 'views/home.html?v='+window.app_version,
			controller 	: 'homeCtrl'
		})
		.when('/login', {
			templateUrl : 'views/login.html?v='+window.app_version,
            controller: 'LoginCtrl'
		})
		.when('/register', {
			templateUrl : 'views/register.html?v='+window.app_version,
            controller: 'RegisterCtrl'
        })
        .when('/wallet', {
			templateUrl : 'views/wallet.html?v='+window.app_version,
            controller: 'WalletCtrl'
        })
        .when('/about', {
			templateUrl : 'views/about.html?v='+window.app_version,
            controller: 'homeCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});*/
        
});
