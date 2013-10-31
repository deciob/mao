(function(define) {
  return define(["lodash"], function(_) {

    var Controller = function() {
      return this;
    };

    Controller.prototype = {

      initialize: function(selector, languagesCollection) {
        this.selector = selector;
        this.language = this.default_language;
        this.languagesCollection = languagesCollection;
        // TODO: is there a better way of selecting and updating 
        // an item in the collection? 
        var new_state = { language: "italiano",
          id: 1,
          status: "active"
        }
        languagesCollection.update(new_state);
      },

      updateLanguage: function(language) {
        this.language = language;
        return language;
      },

      // Set the passed item (language) as active 
      // and set all other items as inactive.
      updateItems: function(item) {
        if (item.status === "active") {
          return item;
        }
        item.status = "active";
        var adapters = this.languagesCollection.adapters;
        var items = _.find(adapters, 
          function(adapter) { return adapter._itemsById; })._itemsById;
        _.each(items, function(_item) {
          if (_item.id !== item.id) {
            _item.status = "inactive";
            this.languagesCollection.update(_item);
          }
        }, this);
        this.languagesCollection.update(item);
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