angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (coreServices, $log) {
      var vm = this;
      vm.hello = 'Hello World!';
      vm.result = {};

      coreServices.testSuccess.query()
        .$promise.then(function (response) {
          $log.info(response);

          vm.result = response;
        }, function (err) {
          $log.error(err);
        });
    }
  });
