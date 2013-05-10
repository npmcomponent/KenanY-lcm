// https://github.com/component/component/issues/212
var gcd;
try {
  gcd = require('gcd');
} catch(e) {
  gcd = require('gcd-component');
}

/**
 * Calculate the least common multiple amongst two integers.
 *
 * @param {Number} number a
 * @param {Number} number b
 * @return {Number} least common multiple for integers a, b
 * @api public
 */
module.exports = function(num1, num2) {
  return Math.abs(num1 * num2) / gcd(num1, num2);
};