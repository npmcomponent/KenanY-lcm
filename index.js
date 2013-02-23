var gcd = require('gcd');

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