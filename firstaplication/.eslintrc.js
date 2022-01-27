module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'multiline-ternary': ['off'],
    indent: [0, 4],
    curly: ['error', 'multi-or-nest'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never' }
    ]
  }
}
