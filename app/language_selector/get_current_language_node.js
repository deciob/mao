(function(define) {
  return define(function(require) {

    return function(e) {
      if (e) { 
        return e.target;
      }
      return document.querySelectorAll("button."  + this.default_language)[0];
    };

  });
})(typeof define === "function" && define.amd ? define : function(factory) {
  return module.exports = factory(require);
});
