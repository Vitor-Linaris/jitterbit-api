import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
  },
  {
    languageOptions: { globals: globals.node },
  },
  {
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      // "single" = usa aspas simples
      // avoidEscape = deixa usar aspas duplas quando necessário (ex: para strings com apóstrofo)
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
