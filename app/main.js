define({

	// Load a basic theme. This is just a CSS file, and since a moduleLoader is
	// configured in run.js, curl knows to load this as CSS.
	theme: { module: 'theme/basic.css' },

	default_language: "italian",
  inactive_class: "inactive",

	get_siblings: { 
    module: "app/utils/get_siblings"
  },

  language_selector_config: { 
		module: "app/language_selector/config"
	},
  language_selector_get_current_node: {
    module: 'app/language_selector/get_current_node'
  },
  language_selector_get_node_config: {
    module: 'app/language_selector/get_node_config'
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
      getCurrentNode: { $ref: "language_selector_get_current_node" },
      getSiblings: { $ref: "get_siblings" }
    },
    ready: {
      initialize: [{$ref: "language_selector"}],
      setCurrentLanguage: []
    },
    on: {
      language_selector: {
        'click:button': 'language_selector_get_node_config | selectLanguage'
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