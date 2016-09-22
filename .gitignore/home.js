var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope,$http) {
    $http.get("exo.json").success(function (data) {
        $scope.myData = data;
    });

    $scope.myFunc = function () {

        $scope.myData.unshift({name:$scope.name, date: $scope.time, assigned:$scope.assigned, done: false});
        $scope.name = null;
        $scope.assigned=null;
        $scope.time=null;

    }

});
/**
 * Created by adila on 21-09-2016.
 */
