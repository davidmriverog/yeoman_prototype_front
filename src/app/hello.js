angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (ApiUrl) {
      this.hello = ApiUrl;
    }
  });
