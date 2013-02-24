/**
 * vector2
 * Vector 2D component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Library namespace.
 */

var vector2 = exports;

/**
 * create
 * Create a 2d vector.
 * 
 * @return {Float32Array} a 2d vector
 * @api public
 */

vector2.create = function () {
  return new Float32Array([0.0, 0.0]);
};

/**
 * set
 * Set vector.
 * 
 * @param {Float32Array} self destination vector
 * @param {Float32Array} v source vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector2.set = function (self, v) {
  self[0] = v[0];
  self[1] = v[1];

  return self;
};

/**
 * zero
 * Set vector to zero.
 * 
 * @param {Float32Array} self destination vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector2.zero = function (self) {
  self[0] = 0.0;
  self[1] = 0.0;

  return self;
};

/**
 * sum
 * Set vector to the sum of `a` and `b`.
 * 
 * @param {Float32Array} self destination vector
 * @param {Float32Array} a vector
 * @param {Float32Array} b vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector2.sum = function (self, a, b) {
  self[0] = a[0] + b[0];
  self[1] = a[1] + b[1];

  return self;
};

/**
 * diff
 * Set vector to the difference of `a` and `b`.
 * 
 * @param {Float32Array} self destination vector
 * @param {Float32Array} a vector
 * @param {Float32Array} b vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector2.diff = function (self, a, b) {
  self[0] = a[0] - b[0];
  self[1] = a[1] - b[1];

  return self;
};

/**
 * add
 * Add vector.
 * 
 * @param {Float32Array} self destination vector
 * @param {Float32Array} v vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector2.add = function (self, v) {
  self[0] += v[0];
  self[1] += v[1];

  return self;
};

/**
 * sub
 * Sub vector.
 * 
 * @param {Float32Array} self destination vector
 * @param {Float32Array} v vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector2.sub = function (self, v) {
  self[0] -= v[0];
  self[1] -= v[1];

  return self;
};

/**
 * diff
 * Set vector to the opposite of `v`.
 * 
 * @param {Float32Array} self destination vector
 * @param {Float32Array} v vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector2.opposite = function (self, v) {
  self[0] = -v[0];
  self[1] = -v[1];

  return self;
};

/**
 * neg
 * Negate vector.
 * 
 * @param {Float32Array} self destination vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector2.neg = function (self) {
  self[0] = -self[0];
  self[1] = -self[1];

  return self;
};

/**
 * scale
 * Scale vector.
 * 
 * @param {Float32Array} self destination vector
 * @param {Number} k scaling value
 * @return {Float32Array} destination vector
 * @api public
 */

vector2.scale = function (self, k) {
  self[0] *= k;
  self[1] *= k;

  return self;
};

/**
 * length
 * Get vector length.
 * 
 * @param {Float32Array} self vector
 * @return {Number} vector length
 * @api public
 */

vector2.length = function (self) {
  var x = self[0];
  var y = self[1];

  return sqrt(x*x + y*y);
};

/**
 * length_squared
 * Get vector length squared.
 * 
 * @param {Float32Array} self vector
 * @return {Number} vector length
 * @api public
 */

vector2.length_squared = function (self) {
  var x = self[0];
  var y = self[1];

  return (x*x + y*y);
};
