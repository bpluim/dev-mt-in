angular.module('devSocial').controller('searchFriendsCtrl', function($scope, $stateParams, mainSrv) {
    
    $scope.friendsList = mainSrv.friendsList;

})