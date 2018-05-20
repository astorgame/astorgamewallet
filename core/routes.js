app.config(function($urlRouterProvider,$stateProvider,$locationProvider ) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            cache: false,
            url: '/',
            templateUrl: 'views/home.html?v='+window.app_version,
            controller: 'homeCtrl',  
            data: {requiredLogin: false}
        })
        .state('about', {
            cache: false,
            url: '/about',
            templateUrl: 'views/about.html?v='+window.app_version,
            controller: 'homeCtrl',  
            data: {requiredLogin: false}
        })
        .state('login', {
            cache: false,
            url: '/login',
            templateUrl: 'views/login.html?v='+window.app_version,
            controller: 'LoginCtrl',  
            data: {requiredLogin: false}
        })
        .state('register', {
            cache: false,
            url: '/register',
            templateUrl: 'views/register.html?v='+window.app_version,
            controller: 'RegisterCtrl',  
            data: {requiredLogin: false}
        })
        .state('profile', {
            cache: false,
            url: '/profile',
            templateUrl: 'views/profile.html?v='+window.app_version,
            controller: 'UserCtrl',  
            data: {requiredLogin: true}
        })
        .state('wallet', {
            cache: false,
            url: '/wallet',
            templateUrl: 'views/wallet.html?v='+window.app_version,
            controller: 'WalletCtrl',  
            data: {requiredLogin: true}
        })
        .state('transactions', {
            cache: false,
            url: '/transactions',
            templateUrl: 'views/transactions.html?v='+window.app_version,
            controller: 'TransactionCtrl',  
            data: {requiredLogin: true}
        })
        .state('deposit', {
            cache: false,
            url: '/deposit',
            templateUrl: 'views/deposit.html?v='+window.app_version,
            controller: 'DepositCtrl',  
            data: {requiredLogin: true}
        })
        .state('withdraw', {
            cache: false,
            url: '/withdraw',
            templateUrl: 'views/withdraw.html?v='+window.app_version,
            controller: 'WithdrawCtrl',  
            data: {requiredLogin: true}
        })
        ;
       // $locationProvider.html5Mode(true); 
});
