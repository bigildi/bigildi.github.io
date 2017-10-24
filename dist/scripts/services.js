contactApp.factory('ListService', function ($resource) {
    return $resource('data/data.json', {
            get: { method: 'JSONP' }
        }
    );
});