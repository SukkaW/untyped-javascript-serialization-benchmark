'use strict';

module.exports = require('eslint-config-sukka').sukka({
  js: {
    env: {
      customGlobals: {
        Bun: 'readonly'
      }
    }
  },
  node: true,
  ts: true
});
