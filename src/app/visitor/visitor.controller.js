function VisitorController() {
  var vm = this;

  vm.title = 'Project';
}

VisitorController.$inject = [];

angular
  .module('app')
  .controller('VisitorController', VisitorController);

