module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000', 'models/init'],
          // Framework libs
          ['^react$', '^next', '^config'],
          ['^axios', '^react-query', 'tanstack', '^mobx', '^effector', '^wouter'],
          ['^@(?!chakra.)'],
          //Tests
          ['^@cy'],
          // UI libs
          ['^@chakra-ui', 'mui'],
          ['^@react-icons'],
          // src/ groups
          ['^app'],
          ['^components'],
          ['^pages'],
          ['^widgets'],
          ['^models'],
          ['^shared'],
          ['^types'],
          ['^src'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
}
