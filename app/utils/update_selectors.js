(function(define) {
  return define(function(require) {

    return function (node) {
      var siblings = this.getSiblings(node);
      _.each(siblings, function(sibling) {
        return sibling.classList.add(this.inactive_class);
      }, this);
      return node.classList.remove(this.inactive_class);
    }

  });
})(typeof define === "function" && define.amd ? define : function(factory) {
  return module.exports = factory(require);
});