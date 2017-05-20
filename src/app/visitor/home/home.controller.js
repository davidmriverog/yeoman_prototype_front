function HomeController() {
  var vm = this;

  vm.moduleTitle = 'Home';
  vm.message = 'This Message!';
}

HomeController.$inject = [];

angular
  .module('app')
  .controller('HomeController', HomeController);
