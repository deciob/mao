define({

  // Load a basic theme. This is just a CSS file, and since a moduleLoader is
  // configured in run.js, curl knows to load this as CSS.
  theme: { module: 'theme/basic.css' },

  default_language: "italiano",
  inactive_class: "inactive",

  languagesCollection: { wire: 'app/collection/spec' },

  language_selector: {
    render: { template: { module: "text!language_selector/template.html" } },
    insert: { at: "dom.first!header" },
    bind: {
      to: { $ref: 'languagesCollection' },
      bindings: {
        language: '.language',
        status: { handler: { $ref: 'statusClassHandler' } }
      }
    }
  },

  language_selector_controller: {
    create: {
      module: 'app/language_selector/controller'
    },
    properties: {
      default_language: { $ref: "default_language" },
      inactive_class: { $ref: "inactive_class" },
    },
    ready: {
      initialize: [
        { $ref: "language_selector" }, 
        { $ref: 'languagesCollection' }
      ],
    },
    on: {
      language_selector: {
      'click:button': 'languagesCollection.findItem | updateItems'
      }
    },
    connect: {
      'languagesCollection.Onupdate': 'updateLanguage'
    }
  },

  // Data binding handler that ensures exactly one of the supplied
  // classes is set on a node. 
  statusClassHandler: {
    create: {
      module: 'app/utils/classSingleton',
      args: ['active', 'inactive']
    }
  },

  // Wire.js plugins
  plugins: [
    { module: 'wire/dom', classes: { init: 'loading' } },
    { module: 'wire/dom/render' },
    { module: 'wire/on' },
    { module: 'wire/aop' },
    'wire/connect', 'cola'
  ]
});