// @see {https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js}
const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  root: true,

  parser: 'babel-eslint',

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/react',
  ],

  plugins: ['emotion', 'prettier'],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],

      parser: '@typescript-eslint/parser',

      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },

      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],

      plugins: ['@typescript-eslint'],
    },
  ],

  rules: {
    'no-console': ['error'],
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'emotion/import-from-emotion': ['error'],
    'emotion/jsx-import': ['error'],
    'emotion/no-vanilla': ['error'],
    'emotion/styled-import': ['error'],
    'emotion/syntax-preference': ['error', 'string'],
    'prettier/prettier': ['error'],
  },
};
