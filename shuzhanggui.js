var shuzhanggui = angular.module('shuzhanggui', ['ui.router','ngAnimate','selectAddress','ui.bootstrap']);
shuzhanggui.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index');
    $stateProvider

        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'views/index.html'
                },
                'leftbar@index': {
                    templateUrl: 'views/leftbar.html'
                },
                'main@index': {
                    templateUrl: 'views/home.html'
                }
            }
        })
        .state('index.borrowbookInfo', {
            url: '/borrowbookInfo',
            views: {
                'main@index': {
                    templateUrl: 'views/borrowbookInfo.html'
                }
            }
        })
       .state('index.bookInfo', {
           url: '/bookInfo',
           views: {
               'main@index': {
                   templateUrl: 'views/bookInfo.html'
               }
           }
       })
       .state('index.bookentry', {
           url: '/bookentry',
           views: {
               'main@index': {
                   templateUrl: 'views/bookentry.html'
               }
           }
       })
       .state('index.userInfo', {
           url: '/userInfo',
           views: {
               'main@index': {
                   templateUrl: 'views/userInfo.html'
               }
           }
       })
       .state('index.userfeedback', {
           url: '/userfeedback',
           views: {
               'main@index': {
                   templateUrl: 'views/userfeedback.html'
               }
           }
       })

       .state('index.userdetails',{
          url:'/userdetails',
          views:{
             'main@index':{
                templateUrl:'views/userdetails.html'
             }
          }
       })


});

