/**
 * Created by dashyki on 15.12.2015.
 */
angular.module('app')
    .controller("SearchController", ['$scope', SearchController]);

function SearchController ($scope) {
    $scope.keyWords = "";

    $scope.search = function() {
        console.log("Key words : " + $scope.keyWords);
        $scope.keyWords = "";
    };
};