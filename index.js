
/* !
 * vector2
 * JavaScript math library for 2d vector
 * Copyright (c) 2012 Enrico Marino (http://onirame.no.de)
 * MIT License
 */

 !(function (exports) {

  /**
   * Library namespace.
   */

  var vector2 = exports.vector2 = {};

  /**
   * Library version.
   */

  vector2.version = '0.0.0';

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
  
 }(this));