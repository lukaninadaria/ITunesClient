/**
 * Created by dashyki on 15.12.2015.
 */
angular.module('app')
    .controller("SearchController", ['$scope', 'SearchService', SearchController]);

function SearchController ($scope, SearchService) {
    $scope.keyWords = "David Bowie";

    $scope.search = function() {
        $scope.searchResults = {};
        $scope.noResults = '';
        SearchService.search($scope.keyWords, function(result) {
            if (result) {
                console.log(result);
                $scope.searchResults = result;
            } else {
                $scope.noResults = "No results"
            }
        });
    };
};