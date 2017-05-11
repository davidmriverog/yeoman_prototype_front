
function RestApiService($resource) {
  this.callService = {
    get: function (endpoint, attrs) {
      return $resource(endpoint, {}, {
        query: {
          method: 'GET',
          isArray: false,
          params: attrs
        }
      });
    }
  };
}

RestApiService.$inject = ['$resource'];

angular
  .module('app')
  .service('RestApiService', RestApiService);

