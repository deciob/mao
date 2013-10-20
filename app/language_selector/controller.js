(function(define) {
  return define(["lodash"], function(_) {

    var Controller = function() {
      return this;
    };

    Controller.prototype = {

      initialize: function(language_selector) {
        return this.getCurrentNode().classList.remove('grey');
      },

      updateSelectors: function(node, siblings) {
        _.each(siblings, function(sibling) {
          return sibling.classList.add('grey');
        });
        return node.classList.remove('grey');
      },

      selectLanguage: function(conf) {
        this.lang = this.setCurrentLanguage(conf.language);
        return this.updateSelectors(conf.node, conf.siblings);
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