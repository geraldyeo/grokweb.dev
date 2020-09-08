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
  // see docs about api at https://babeljs.io/docs/en/config-files#apicache
  api.assertVersion('^7.0.0');

  const { modules = 'auto', targets = buildTargets(options) } = options;

  if (typeof modules !== 'boolean' && modules !== 'auto') {
    throw new TypeError(
      '@grokweb/babel-preset-env only accepts `true`, `false`, or `"auto"` as the value of the "modules" option'
    );
  }

  const debug = typeof options.debug === 'boolean' ? options.debug : false;
  const development =
    typeof options.development === 'boolean'
      ? options.development
      : api.cache.using(() => process.env.NODE_ENV === 'development');

  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          debug,
          exclude: [
            'transform-async-to-generator',
            'transform-template-literals',
            'transform-regenerator',
          ],
          modules: modules === false ? false : 'auto',
          targets,
        },
      ],
      [require('@babel/preset-react'), { development }],
      require('@babel/preset-typescript'),
      require('@emotion/babel-preset-css-prop'),
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
