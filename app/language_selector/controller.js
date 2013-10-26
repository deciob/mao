(function(define) {
  return define(["lodash"], function(_) {

    var Controller = function() {
      return this;
    };

    Controller.prototype = {

      initialize: function(language_selector) {
        this.language_selector = language_selector;
        return this.getCurrentNode().classList.remove(this.inactive_class);
      },

      updateSelectors: function(node) {
        var siblings = this.getSiblings(node);
        _.each(siblings, function(sibling) {
          return sibling.classList.add(this.inactive_class);
        }, this);
        return node.classList.remove(this.inactive_class);
      },

      selectLanguage: function(conf) {
        this.lang = this.setCurrentLanguage(conf.language);
        return this.updateSelectors(conf.node);
      },

      setCurrentLanguage: function(lang) {
        return lang || this.defaultLanguage;
      }

    };

    Controller.plugins = [
      {
        module: "wire/dom"
      }
    ];

    return Controller;

  });
})(typeof define === "function" && define.amd ? define : function(ids, factory) {
  var deps;
  deps = ids.map(function(id) {
    return require(id);
  });
  return module.exports = factory.apply(null, deps);
});