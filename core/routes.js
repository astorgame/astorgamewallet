app.config(function($urlRouterProvider,$stateProvider,$locationProvider ) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            cache: false,
            url: '/',
            templateUrl: 'views/home.html?v='+window.app_version,
            controller: 'homeCtrl'  
        })
        .state('login', {
            cache: false,
            url: '/login',
            templateUrl: 'views/login.html?v='+window.app_version,
            controller: 'LoginCtrl'
        })
        .state('register', {
            cache: false,
            url: '/register',
            templateUrl: 'views/register.html?v='+window.app_version,
            controller: 'RegisterCtrl'
        })
        .state('profile', {
            cache: false,
            url: '/profile',
            templateUrl: 'views/profile.html?v='+window.app_version,
            controller: 'UserCtrl'
        })
        .state('wallet', {
            cache: false,
            url: '/wallet',
            templateUrl: 'views/wallet.html?v='+window.app_version,
            controller: 'WalletCtrl'
        })
        .state('transactions', {
            cache: false,
            url: '/transactions',
            templateUrl: 'views/transactions.html?v='+window.app_version,
            controller: 'TransactionCtrl'
        })
        .state('deposit', {
            cache: false,
            url: '/deposit',
            templateUrl: 'views/deposit.html?v='+window.app_version,
            controller: 'DepositCtrl'
        })
        .state('withdraw', {
            cache: false,
            url: '/withdraw',
            templateUrl: 'views/withdraw.html?v='+window.app_version,
            controller: 'WithdrawCtrl'
        })
        .state('about', {
            cache: false,
            url: '/about',
            templateUrl: 'views/about.html?v='+window.app_version,
            controller: 'homeCtrl'
        })
        ;
       // $locationProvider.html5Mode(true);
      
        
});
