const SCRIPTS = require("../scripts.js");

const assert = require('assert');

describe('Chapter 5 High Order Functions', function() {

  describe('scripts', function() {
    it('Adlam is the first script', function() {
      assert.equal(SCRIPTS[0].name, "Adlam");
    });

  });

});
