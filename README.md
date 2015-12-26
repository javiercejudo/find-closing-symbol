# find-closing-symbol

[![Build Status](https://travis-ci.org/javiercejudo/find-closing-symbol.svg)](https://travis-ci.org/javiercejudo/find-closing-symbol)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/find-closing-symbol/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/find-closing-symbol?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/find-closing-symbol/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/find-closing-symbol)

Find closing symbol (parentheses, curly braces...)

## Install

    npm i find-closing-symbol

## Usage

```js
var findClosingSymbol = require('find-closing-symbol');
var findClosingParenthesis = findClosingSymbol('(', ')');

findClosingParenthesis('2 + (5 + 1)) * 5'); // => 12
```

See [spec](test/spec.js).
