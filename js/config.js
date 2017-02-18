(function (window) {
    'use strict';
    angular.module('Cric-Card')
    .config(function ($stateProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise('/#');
        $stateProvider
        .state('Play',{
            url:'/Play',
            templateUrl:'second.html',
            controller:'CricCardController',
            controllerAs: 'CCntrl'
        });



    });

})(window);
