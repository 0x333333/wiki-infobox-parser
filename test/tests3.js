var assert = require("assert");
var parser = require('../index');
var checkJson = require('../lib/utils').checkJson;

/**
 * Load all keywords
 * from './data/cocktails.txt'
 */
var fs = require('fs');
var buffer, arr;

fs.readFile(__dirname + '/data/cocktails.txt', function (err, data) {
  if (err) {
    console.error(err);
  } else {
    buffer = data.toString();
    arr = buffer.split('\n');
    test(arr);
  }
});

/**
 * Main test function
 * @method test
 * @param  {[Array]}  arr  Array of keywords
 */
function test(arr) {
  describe('Stability test', function(done) {
    arr.forEach(function(a) {
      it('Should parse without crashing', function(done) {
        parser(a, function(err, result) {
          if (err) {
            assert.equal('object', typeof err);
          } else {
            assert.equal(true, checkJson(result));
          }
          done();
        });
      });
    });
  });
}
