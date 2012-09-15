
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

  

 }(this));