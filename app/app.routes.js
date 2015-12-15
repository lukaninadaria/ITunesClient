/**
 * Created by dashyki on 15.12.2015.
 */
angular.module('app')
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/search', {
                    templateUrl: 'app/components/search/search.html',
                    controller: 'SearchController'
                }).
                otherwise({
                    redirectTo: '/search'
                });
        }]);