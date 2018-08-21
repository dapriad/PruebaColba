let angular = require('angular');
let module = require('./module');

require('./states/home/HomeCtrl.js');

module.config(function($stateProvider, $urlRouterProvider) {
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('/home',{
            url:'/home',
            templateUrl:'/app/states/home/HomeView.html',
            controller:'HomeCtrl'
        })
});