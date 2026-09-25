/** @license Apache-2.0 */

'use strict';

/**
* Return the first index of an element in a one-dimensional single-precision floating-point ndarray which is not equal to a specified search element.
*
* @module @stdlib/blas-ext-base-ndarray-sindex-of-not-equal
*
* @example
* var Float32Vector = require( '@stdlib/ndarray-vector-float32' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var sindexOfNotEqual = require( '@stdlib/blas-ext-base-ndarray-sindex-of-not-equal' );
*
* var x = new Float32Vector( [ 1.0, 1.0, 3.0 ] );
*
* var searchElement = scalar2ndarray( 1.0, {
*     'dtype': 'float32'
* });
*
* var fromIndex = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var v = sindexOfNotEqual( [ x, searchElement, fromIndex ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
