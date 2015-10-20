var assert = require("assert");
var parser = require('../index');
var checkJson = require('../lib/utils').checkJson;

describe('My test.', function(done) {

  it.only('should return json data', function(done) {
    parser('Dartmouth College', function(err, result) {
      console.log(result);
      assert.equal(true, checkJson(result));
      done();
    });
  });

});
