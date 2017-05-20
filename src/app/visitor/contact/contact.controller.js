function ContactController() {
  var vm = this;

  vm.moduleTitle = 'Contact';
  vm.message = 'This Message!';
}

ContactController.$inject = [];

angular
  .module('app')
  .controller('ContactController', ContactController);
