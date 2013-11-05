(function(define) {
  return define(["lodash"], function(_) {

    var Controller = function() {
      return this;
    };

    Controller.prototype = {

      initialize: function(selector) {
        this.selector = selector;
      },

      updateLanguage: function(language) {
        this.language = language;
        return language;
      },

      // Set the passed item (language) as active 
      // and set all other items as inactive.
      updateItems: function(item) {
        var languagesCollection, items;
        if (item.status === "active") {
          return item;
        }
        languagesCollection = this.languagesCollection;
        languagesCollection.forEach(function (language) {
          if (language.id == item.id) {
            language.status = "active";
          } else {
            language.status = "inactive";
          }
          languagesCollection.update(language);
        });
        return item;
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