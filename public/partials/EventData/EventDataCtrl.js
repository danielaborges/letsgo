'use strict';

/* Controllers */

appControllers.controller('EventDataCtrl', ['$scope', '$routeParams', 'EventFactory',                                            function($scope, $routeParams, EventFactory) {

    $scope.eventId = $routeParams.eventId;
    $scope.hello = '';

    function initialize(){
        EventFactory.getData($scope.eventId).then(function(result) {
            $scope.hello =  result.data;
        });
    }


    initialize();

}]);
