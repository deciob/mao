(function(define) {
  return define(function(require) {

    // Given a node, set an active class on it,
    // and remove any active classes from its siblings
    // and return the (active) node.
    return function (node) {
      var siblings = this.getSiblings(node);
      _.each(siblings, function(sibling) {
        return sibling.classList.add(this.inactive_class);
      }, this);
      node.classList.remove(this.inactive_class);
      return node;
    }

  });
})(typeof define === "function" && define.amd ? define : function(factory) {
  return module.exports = factory(require);
});