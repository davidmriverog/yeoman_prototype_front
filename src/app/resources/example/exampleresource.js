function coreServices(apirestService) {
  return {
    testSuccess: apirestService.callService.get('/core/test-success-data', [])
  };
}

coreServices.$inject = ['apirestService'];

angular
  .module('app')
  .factory('coreServices', coreServices);

