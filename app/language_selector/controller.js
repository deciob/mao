(function(define) {
  return define(["lodash"], function(_) {

    var Controller = function() {
      return this;
    };

    Controller.prototype = {

      initialize: function(selector) {
        this.selector = selector;
        this.language = this.default_language;
        return this.getCurrentLanguageNode().classList.remove(this.inactive_class);
      },

      updateLanguage: function(language) {
        this.language = language;
        return language;
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