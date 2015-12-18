/**
 * Created by dashyki on 15.12.2015.
 */
(function() {
    angular.module('app')
        .service('SearchService', ['SearchResource', searchService]);

    function searchService(SearchResource) {
        this.search = function(keyWords, callback) {
            SearchResource.get({term : keyWords}).$promise
                .then(function(res) {
                    callback && callback(parseResults(res));
                });
        };

        function parseResults(data) {
            return _.groupBy(data.results, 'wrapperType');
        };
    };
})();