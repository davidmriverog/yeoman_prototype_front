angular
  .module('app')
  .component('home', {
    templateUrl: 'app/visitor/home/home.html',
    controller: 'HomeController',
    controllerAs: 'vm',
    require: {
      // access to the functionality of the parent component called 'formComponent'
      parent: '^visitor'
    }
  });
