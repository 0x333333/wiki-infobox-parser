var assert = require("assert");
var parser = require('../index');
var checkJson = require('../lib/utils').checkJson;

describe('Wikipedia text is parsed successfully.', function(done) {

  it('should return json data', function(done) {
    parser('france', function(err, result) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(true, checkJson(result));
      }
      done();
    });
  });

  it('should return json data', function(done) {
    parser('GitHub', function(err, result) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(true, checkJson(result));
      }
      done();
    });
  });

  it('should return json data', function(done) {
    parser('Stoic_(film)', function(err, result) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(true, checkJson(result));
      }
      done();
    });
  });

  it('should handle unexpected characters', function(done) {
    parser('Lewis–Clark_State_College', function(err, result) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(true, checkJson(result));
      }
      done();
    });
  });

  it('should handle the \'=\' issue', function(done) {
    parser('china', function(err, result) {
      if (err) {
        console.error(err);
      } else {
        assert.equal('People\'s Republic of China', JSON.parse(result).conventional_long_name);
      }
      done();
    });
  });

});

describe('List templates are parsed.', function(done) {
  it('should parse unbulleted list', function(done) {
    parser('france', function(err, result) {
      if (err) {
        console.error(err);
      } else {
        assert.equal('Euro (EUR), CFP franc (XPF)', JSON.parse(result).currency);
      }
      done();
    });
  });

  it('should parse url', function(done) {
    parser('nodejs', function(err, result) {
      if (err) {
        console.error(err);
      } else {
        assert.equal('//nodejs.org', JSON.parse(result).website);
      }
      done();
    });
  });

  it('should parse start date', function(done) {
    parser('nodejs', function(err, result) {
      if (err) {
        console.error(err);
      } else {
        assert.equal('2009/05/27', JSON.parse(result).released);
      }
      if (err) {
        console.error(err);
      } else {
        assert.equal('2015/10/29', JSON.parse(result)['latest release date']);
      }
      done();
    });
  });
});

describe('Wikipedia parser need to redirect.', function(done) {

  it('should return redirection', function(done) {
    parser('nodejs', function(err, result) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(-1, result.indexOf('REDIRECT'));
      }
      done();
    });
  });

});

describe('Wikipedia parser returns not found.', function(done) {

  it('should return Page Index Not Found', function(done) {
    parser('nomatterwhathere', function(err, result) {
      assert.equal('Page Index Not Found', err.message);
      done();
    });
  });

  it('should return Query Not Found', function(done) {
    parser('', function(err, result) {
      assert.equal('Query Not Found', err.message);
      done();
    });
  });

  it('should return Malformed Response Payload', function(done) {
    parser('Wy┼╝sza Szko┼éa Filologiczna', function(err, result) {
      assert.equal('Page Index Not Found', err.message);
      done();
    });
  });

});
