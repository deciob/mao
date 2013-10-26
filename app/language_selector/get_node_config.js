(function(define) {
  return define(function(require) {

    return function(e) {
      var node = this.getCurrentNode(e);
      return {
        node: node,
        language: node.id.slice(4)
      };
    };

  });
})(typeof define === "function" && define.amd ? define : function(factory) {
  return module.exports = factory(require);
});
