module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

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
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],

  plugins: ['@typescript-eslint', 'emotion', 'prettier'],

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

  rules: {
    'no-console': ['error'],
    'emotion/import-from-emotion': ['error'],
    'emotion/jsx-import': ['error'],
    'emotion/no-vanilla': ['error'],
    'emotion/styled-import': ['error'],
    'emotion/syntax-preference': ['error', 'string'],
    'prettier/prettier': ['error'],
  },
};
