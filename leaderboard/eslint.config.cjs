const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const prettier = require('eslint-plugin-prettier');
const path = require('path');

const compat = new FlatCompat({
  baseDirectory: path.resolve(),
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  js.configs.recommended,
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:@next/next/recommended'),
  ...compat.extends('plugin:prettier/recommended'),
  {
    plugins: {
      react,
      prettier,
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
