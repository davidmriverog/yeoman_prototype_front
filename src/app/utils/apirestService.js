
function apirestService($resource, ApiUrl, $log) {
  this.callService = {
    get: getService,
    verified: isVerifiedEndPoint
  };

  function isVerifiedEndPoint() {
    if (angular.isDefined(ApiUrl) || ApiUrl !== '') {
      return true;
    }

    $log.error('Site Required Url Api.');
    return false;
  }

  function getService(endpoint, attrs) {
    if (isVerifiedEndPoint()) {
      var query = {
        query: {
          url: ApiUrl + endpoint,
          method: 'GET',
          isArray: false,
          params: attrs
        }
      };
      return $resource(ApiUrl + endpoint, {}, query);
    }
  }
}

apirestService.$inject = ['$resource', 'ApiUrl', '$log'];

angular
  .module('app')
  .service('apirestService', apirestService);

