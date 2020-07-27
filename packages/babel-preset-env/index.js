/* eslint-disable */
// @see {https://github.com/airbnb/babel-preset-airbnb/blob/master/index.js}
const { declare } = require('@babel/helper-plugin-utils');

const defaultTargets = {
  android: 35,
  chrome: 40,
  edge: 18,
  ie: 11,
  firefox: 72,
  safari: 12,
};

function buildTargets({ additionalTargets }) {
  return Object.assign({}, defaultTargets, additionalTargets);
}

module.exports = declare((api, options) => {
  return {
    presets: [
      require('@babel/preset-env'),
      require('@babel/preset-react'),
      require('@babel/preset-typescript'),
    ],
    plugins: [
      // Stage 1
      require('@babel/plugin-proposal-export-default-from'),
      require('@babel/plugin-proposal-logical-assignment-operators'),
      require('@babel/plugin-proposal-optional-chaining'),
      require('@babel/plugin-proposal-pipeline-operator'),
      require('@babel/plugin-proposal-nullish-coalescing-operator'),
      require('@babel/plugin-proposal-do-expressions'),

      // Stage 2
      [require('@babel/plugin-proposal-decorators'), { legacy: true }],
      require('@babel/plugin-proposal-function-sent'),
      require('@babel/plugin-proposal-export-namespace-from'),
      require('@babel/plugin-proposal-numeric-separator'),
      require('@babel/plugin-proposal-throw-expressions'),

      // Stage 3
      require('@babel/plugin-syntax-dynamic-import'),
      require('@babel/plugin-syntax-import-meta'),
      [require('@babel/plugin-proposal-class-properties'), { loose: true }],
      require('@babel/plugin-proposal-json-strings'),

      //
      require('babel-plugin-dev-expression'),
      require('babel-plugin-macros'),
    ],
  };
});
