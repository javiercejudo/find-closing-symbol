/*jshint node:true, mocha:true */

'use strict';

require('should');

var findClosingSymbol = require('../src/');
var findClosingParenthesis = findClosingSymbol('(', ')');
var findClosingCurlyBraces = findClosingSymbol('{', '}');

describe('find closing symbol', function() {
  it('finds the closing symbol', function() {
    findClosingParenthesis('2 + 5) * 5').should.be.exactly(6);
    findClosingCurlyBraces('return a + function(x) { return x; }; }').should.be.exactly(39);
  });

  it('should support nested symbols', function() {
    findClosingParenthesis('2 + (5 + 1)) * 5').should.be.exactly(12);
  });

  it('should return -1 when no closing symbols are found', function() {
    findClosingParenthesis('2 + 5').should.be.exactly(-1);
  });
});
