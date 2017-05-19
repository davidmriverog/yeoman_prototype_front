angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (coreServices) {
      this.hello = 'Hello World!';
      this.result = {};

      coreServices.testSuccess.query()
      .$promise.then(function (response) {
        this.result = response.data;
      });
    }
  });
