/**
 * Created by dashyki on 15.12.2015.
 */
(function() {
    angular.module('app')
        .service('SearchService', ['ITunesSearchResult', searchService]);

    function searchService(ITunesSearchResult) {
        this.search = function(keyWords, callback) {
            ITunesSearchResult.get({term : keyWords}).$promise
                .then(function(res) {
                    callback && callback(parseResults(res));
                });
        };

        function parseResults(data) {
            return _.groupBy(data.results, 'wrapperType');
        };
    };
})();