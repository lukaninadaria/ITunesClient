/**
 * Created by dashyki on 15.12.2015.
 */
angular.module('app')
    .service('SearchService', searchService);

function searchService(ITunesSearchResult) {
    this.search = function(keyWords, callback) {
        //TODO replace
        var self = this;
        ITunesSearchResult.get({term : keyWords}, function(res) {
            var results = res.hasOwnProperty('results')?self.parseResults(res):{};
            callback && callback(results);
        });
    };

    this.parseResults = function(data) {
        var resultJson = {};
        //TODO shorten
        if (data.hasOwnProperty('results')) {
            for (var i = 0; i < data.resultCount; i++) {
                var current = data.results[i];
                if (!resultJson.hasOwnProperty(current.kind)) {
                    resultJson[current.kind] = [];
                }
                resultJson[current.kind].push(current);
            }
        }
        return resultJson;
    };
};