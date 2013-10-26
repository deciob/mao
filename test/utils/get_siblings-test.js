(function(define) {
  return define(function(require) {

    var jsdom = require("jsdom").jsdom;
    var buster = require("buster");
    var assert = buster.referee.assert;
    var getSiblings = require('../../app/utils/get_siblings');

    return buster.testCase("utils/get_siblings", {
      "get_siblings test case": function() {
        var frag = '<p id="one">A</p><p>B</p><p>C</p><div><p>B</p><p>C</p></div>';
        var document = jsdom(frag);
        var window = document.parentWindow;
        var node = window.document.getElementById("one");
        var siblings = getSiblings(node);
        window.close();
        return assert.equals(siblings.length, 3);
      }
    });

  });
})((typeof define === "function" && define.amd ? define : function(factory) {
  return module.exports = factory(require);
}));