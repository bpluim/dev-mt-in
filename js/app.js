angular.module('devSocial', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('initialView', {
            url: '/',
            templateUrl: 'views/initialView/initialView.html',
            controller: 'initialCtrl'
        })
        .state('landingPage', {
            url: '/landingPage',
            templateUrl: 'views/landingPage/landingPage.html',
            controller: 'landingPageCtrl'
        })
        .state('friendsView', {
            url: '/friendsView',
            templateUrl: 'views/friendsView/friendsView.html',
            controller: 'friendsViewCtrl'
        })
        .state('searchFriends', {
            url: '/searchFriends',
            templateUrl: 'views/searchFriends/searchFriends.html',
            controller: 'searchFriendsCtrl'
        })
        .state('friendProfile', {
            url: '/friendProfile',
            templateUrl: 'views/friendProfile/friendProfile.html',
            controller: 'friendProfileCtrl'
        })
        .state('updateProfile', {
            url: '/updateProfile',
            templateUrl: 'views/updateProfile/updateProfile.html',
            controller: 'updateProfileCtrl'
        })

    $urlRouterProvider
        .otherwise('/');
})