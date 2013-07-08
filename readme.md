# vector2

vector 2D component

## Installation

    $ component install enricomarino/vector2

## API

### create():Float32Array

Create a 2d vector.

### set(self:Float32Array, v:Float32Array):Float32Array

Set vector.

### zero(self):Float32Array

Set vector to zero.

### sum(self:Float32Array, v1:Float32Array, v2:Float32Array):Float32Array

Set vector to the sum of `v1` and `v2`.

### diff(self:Float32Array, v1:Float32Array, v2:Float32Array):Float32Array

Set vector to the difference of `v1` and `v2`.

### add(self:Float32Array, v:Float32Array):Float32Array

Add vector `v`.

### sub(self:Float32Array, v):Float32Array

Sub vector `v`.

### opposite(self:Float32Array, v:Float32Array):Float32Array

Set vector to the opposite of `v`.

### neg(self:Float32Array):Float32Array

Negate vector.

### scale(self:Float32Array, k:Number):Float32Array

Scale vector.

### length(self:Float32Array):Float32Array

Get vector length.

### length_squared(self:Float32Array):Float32Array

Get vector length squared.


## License

(The MIT License)

Copyright (c) 2013 Enrico Marino

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
