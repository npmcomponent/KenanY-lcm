// https://github.com/component/component/issues/212
var gcd;
try {
  gcd = require('KenanY-gcd');
} catch(e) {
  gcd = require('gcd-component');
}

/**
 * Calculate the least common multiple amongst two integers.
 *
 * @param {Number} number x
 * @param {Number} number y
 * @return {Number} least common multiple for integers x and y
 * @api public
 */
module.exports = function(x, y) {
  return Math.abs(x * y) / gcd(x, y);
};