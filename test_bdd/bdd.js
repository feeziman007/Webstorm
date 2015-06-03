var assert = require('assert');
var expect = require('chai').expect;
var color = 'blue';
var age = 60;

function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

describe('add()', function() {
  var tests = [
    {args: [1, 2],       expected: 3},
    {args: [1, 2, 3],    expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});

describe('color test ',function () {
  it('color should be "' + color + '"', function () {
    expect(color).to.equal('blue');
  });
  it('age should be less than "' + age + '"', function () {
    expect(age).to.equal(60);
  });
})