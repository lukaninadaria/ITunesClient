/**
 * Created by dashyki on 15.12.2015.
 */
angular.module('app')
    .factory('ITunesSearchResult', ['$resource', function($resource) {
    return $resource('https://itunes.apple.com/:verb',
        {verb : 'search', callback : 'JSON_CALLBACK'},
        {get : {method : 'JSONP'}});
}]);