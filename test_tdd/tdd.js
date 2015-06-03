var expect = require('chai').expect;
var color = 'blue'
  , number = 753
  , age = 30


suite('First Mocha/Chai TDD style test', function() {

  setup(function() {
    //console.log('setup');
  });

  teardown(function() {
    //console.log('teardown');
  });

  test('color should be "'+ color+ '"', function() {
    expect(color).to.equal('blue');
    //console.log('color test');
  });

  suite('Inner suite', function() {
    test('number should be "'+ number + '"', function() {
      expect(number).to.equal(753)
      //console.log('number test');
    });
    test('age should be "'+ age + '"', function() {
      expect(age).to.equal(30)
      //console.log('age test');
    });
  });
})
