function Exampleresource() {
}

Exampleresource.prototype.getData = function () {
  return 1 + 2;
};

angular
  .module('app')
  .service('Exampleresource', Exampleresource);

