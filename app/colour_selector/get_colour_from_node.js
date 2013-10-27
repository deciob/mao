(function(define) {
  return define(function(require) {

    // Infer the current language from the passed node and return it.
    return function(node) {
      var class_name = node.className;
      // A space in the class_name means more than one class, 
      // if this happens shout loudly!
      var r = /\s/;
      if (r.test(class_name)) {
        throw new Error(
          "Trying to detect the language from more than one class name: '" +
          class_name + "'"
        );
      }
      return class_name;
    };

  });
})(typeof define === "function" && define.amd ? define : function(factory) {
  return module.exports = factory(require);
});