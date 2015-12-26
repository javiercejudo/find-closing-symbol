/*jshint node:true */

'use strict';

var symbolShiftFactory = require('./shift');

function findClosingSymbolsFactory(opening, closing) {
  var symbolShift = symbolShiftFactory(opening, closing);

  return function findClosingSymbols(str) {
    var counter = 1;

    for (var index = 0, max = str.length; index < max; index += 1) {
      counter += symbolShift(str[index]);

      if (counter === 0) {
        return index + 1;
      }
    }

    return -1;
  };
}

module.exports = findClosingSymbolsFactory;
