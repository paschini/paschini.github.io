/** @format */

import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPlugInImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'backup'] },
  {
    extends: [
      eslintConfigPrettier,
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      import: eslintPlugInImport,
      prettier: eslintPluginPrettier,
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never'
        }
      ],
      'import/no-unresolved': ['error'],
      'import/no-internal-modules': [
        'error',
        {
          allow: [
            '**/common/*',
            '**/assets/*',
            'react-dom/*',
            'jest-dom/*',
            'react-dom/test-utils',
            '@testing-library/jest-dom/extend-expect'
          ]
        }
      ],

      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'no-undef': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-assertions': [
        'warn',
        { assertionStyle: 'never' }
      ],
      'react/jsx-no-undef': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'relay/generated-flow-types': 'off',
      'prettier/prettier': [
        'error',
        { singleQuote: true, jsxSingleQuote: true }
      ],
      quotes: ['error', 'single', 'avoid-escape'],
      'jsx-quotes': ['error', 'prefer-single']
    }
  }
);
