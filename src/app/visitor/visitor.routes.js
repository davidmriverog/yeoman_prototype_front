angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('home');

  $stateProvider
    .state('visitor', {
      url: '/',
      component: 'visitor'
    })
    .state('visitor.home', {
      url: 'home',
      component: 'home'
    })
    .state('visitor.contact', {
      url: 'contact',
      component: 'contact'
    });
}
