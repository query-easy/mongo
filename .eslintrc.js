module.exports = {
  'env': {
    'node': true,
    'commonjs': true,
    'es6': true,
    'mocha': true
  },
  'extends': ['eslint:recommended'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018
  },
  'rules': {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-console': 2,
    'semi-style': ['error', 'last'],
    'semi-spacing': ['error', { before: false, after: true }]
  }
};