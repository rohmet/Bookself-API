import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      js,
    },
    extends: ['js/recommended'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
    rules: {
      'linebreak-style': ['error', 'unix'],
      'no-trailing-spaces': 'error',
      'indent': ['error', 2],
      'camelcase': 'error',
      'arrow-parens': ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'space-before-function-paren': [
        'error',
        { anonymous: 'always', named: 'never', asyncArrow: 'always' },
      ],
      'func-call-spacing': ['error', 'never'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'prefer-const': 'error',
      'no-var': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'prefer-template': 'error',
      'prefer-arrow-callback': 'error',
    },
  },
]);