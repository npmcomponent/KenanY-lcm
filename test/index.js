var lcm = require('..');

describe('lcm(x, y)', function() {
  it('should return the least common denominator for two integers', function() {
    lcm(12, 80).should.equal(240);
  });
});