define({

  $exports: { $ref: 'languagesCollection' },

  language_data: { module: "app/collection/language_data"},

  languagesCollection: {
    create: {
      module: 'cola/Collection'
    }
  },

  languagesStore: {
    create: {
      module: 'cola/adapter/Array',
      args: {$ref: "language_data"}
    },
    bind: { 
      $ref: 'languagesCollection',
      provide: false
    }
  },

  $plugins: [
  { module: 'wire/dom' },
  { module: 'wire/on' },
  { module: 'wire/aop' },
  { module: 'cola' }
  ]

});