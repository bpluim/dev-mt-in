angular.module('devSocial').controller('friendsViewCtrl', function($scope, $stateParams, mainSrv) {
    
    $scope.friendsList = mainSrv.friendsList;

})