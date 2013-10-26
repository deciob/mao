define({

  // Load a basic theme. This is just a CSS file, and since a moduleLoader is
  // configured in run.js, curl knows to load this as CSS.
  theme: { module: 'theme/basic.css' },

  default_language: "italiano",
  inactive_class: "inactive",

  get_siblings: { module: "app/utils/get_siblings"},
  update_nodes_state: { module: "app/utils/update_nodes_state"},

  language_selector_config: { 
    module: "app/language_selector/config"
  },
  get_current_language_node: {
    module: 'app/language_selector/get_current_language_node'
  },
  get_language_from_node: {
    module: 'app/language_selector/get_language_from_node'
  },

  language_selector: {
    render: { template: { module: "text!language_selector/template.html" } },
    insert: { at: "dom.first!header" }
  },

  language_selector_controller: {
    create: {
      module: 'app/language_selector/controller'
    },
    properties: {
      default_language: { $ref: "default_language" },
      inactive_class: { $ref: "inactive_class" },
      getLanguage: { $ref: "get_language_from_node" },
      getCurrentLanguageNode: { $ref: "get_current_language_node" },
      getSiblings: { $ref: "get_siblings" },
      updateNodesState: { $ref: "update_nodes_state" }
    },
    ready: {
      initialize: [{$ref: "language_selector"}],
    },
    on: {
      language_selector: {
        'click:button':
          'getCurrentLanguageNode | updateNodesState | \
          get_language_from_node | updateLanguage'
      }
    }
  },

  // Wire.js plugins
  plugins: [
    { module: 'wire/dom', classes: { init: 'loading' } },
    { module: 'wire/dom/render' },
    { module: 'wire/on' },
    { module: 'wire/aop' }
  ]
});