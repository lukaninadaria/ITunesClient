/**
 * Created by dashyki on 15.12.2015.
 */
(function() {
    angular.module('app')
        .factory('SearchResource', ['$resource', SearchResource]);

    function SearchResource($resource) {
        return $resource('https://itunes.apple.com/:verb',
            {verb : 'search', callback : 'JSON_CALLBACK'},
            {get : {method : 'JSONP'}});
    };
})();