describe('Exampleresource service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Exampleresource) {
    expect(Exampleresource.getData()).toEqual(3);
  }));
});
