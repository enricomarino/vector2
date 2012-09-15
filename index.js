
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
   * Set a 2d vector.
   * 
   * @param {Float32Array} self destination vector
   * @param {Float32Array} v sorce vector
   * @return {Float32Array} a 2d vector
   * @api public
   */

  vec2.set = function (self, v) {
    self[0] = v[0];
    self[1] = v[1];

    return self;
  };


 }(this));