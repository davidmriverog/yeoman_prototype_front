angular
  .module('app')
  .component('contact', {
    templateUrl: 'app/visitor/contact/contact.html',
    controller: 'ContactController',
    controllerAs: 'vm',
    require: {
      // access to the functionality of the parent component called 'formComponent'
      parent: '^visitor'
    }
  });
