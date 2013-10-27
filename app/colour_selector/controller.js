(function(define) {
  return define(["lodash"], function(_) {

    var Controller = function() {
      return this;
    };

    Controller.prototype = {

      initialize: function(selector) {
        this.selector = selector;
        this.colour = this.default_colour;
        return this.getCurrentColourNode().classList.remove(this.inactive_class);
      },

      updateColour: function(colour) {
        this.colour = colour;
        return colour;
      }

    };

    return Controller;

  });
})(typeof define === "function" && define.amd ? define : function(ids, factory) {
  var deps;
  deps = ids.map(function(id) {
    return require(id);
  });
  return module.exports = factory.apply(null, deps);
});