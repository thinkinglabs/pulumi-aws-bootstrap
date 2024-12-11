import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [{
  ignores: ['!**/.*rc.js'],
}, ...compat.extends('google'), {
  files: ['src/**/*.ts', 'tests/**/*.ts'],

  plugins: {
    '@typescript-eslint': typescriptEslint,
  },

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.mocha,
    },

    parser: tsParser,
    ecmaVersion: 12,
    sourceType: 'module',
  },

  rules: {
    'max-len': ['error', {
      code: 120,
    }],

    'no-multi-str': 'off',
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
  },
}];
