/*jshint node:true */

'use strict';

module.exports = function shiftFactory(opening, closing) {
  return function shift(x) {
    if (x === opening) {
      return 1;
    }

    if (x === closing) {
      return -1;
    }

    return 0;
  };
};
