const rules = require('./.eslintrc.rules')

module.exports = {
  extends: [
    'plugin:compat/recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    'standard',
    'plugin:unicorn/recommended',
    '@vue/standard',
  ],
  rules,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: [
    'unicorn',
  ],
}
