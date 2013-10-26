(function(define) {
  return define(function(require) {

    // Get all siblings of an HTML node.
    return function(currentNode) {
      var result = [];
      var node = currentNode.parentNode.firstChild;
      while (node) {
        if (node.nodeType === 1 && node !== currentNode) {
          result.push(node);
        }
        node = node.nextElementSibling || node.nextSibling;
      }
      return result;
    };

  });
})(typeof define === "function" && define.amd ? define : function(factory) {
  return module.exports = factory(require);
});
