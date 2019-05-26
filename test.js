// -*- compile-command: "node test.js"; -*-
var assert = require('assert')
var wcL = require('./index.js')

wcL('test.txt').then(function(nlines) {
  console.log(nlines)
  assert(nlines == 26)
})
