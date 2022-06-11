module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'prefer-arrow'],
  ignorePatterns: ['lib'],

  rules: {
    'import/named': 'off',
    'import/no-named-as-default': 'off',
    'import/extensions': 'off',

    'import/order': [
      1,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'prefer-destructuring': [
      2,
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        classPropertiesAllowed: true,
        singleReturnOnly: true,
      },
    ],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'no-multiple-empty-lines': [1, { max: 1, maxEOF: 0 }],
  },
  settings: {
    'no-undef': {
      typescript: {
        project: ['tsconfig.json'],
      },
    },
  },
};
