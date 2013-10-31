(function(define) {
  return define(function(require) {

    return [
      { language: "italiano",
        id: 1,
        status: "inactive"
      },
      { language: "español",
        id: 2,
        status: "inactive"
      },
      { language: "English",
        id: 3,
        status: "inactive"
      }
    ];

  });
})(typeof define === "function" && define.amd ? define : function(factory) {
  return module.exports = factory(require);
});
