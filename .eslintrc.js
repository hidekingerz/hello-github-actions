module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    amd: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:jest/recommended', 'prettier', 'plugin:storybook/recommended'],
  plugins: ['react', 'react-hooks', "jsx-expressions"],
  rules: {
    'no-var': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    "jsx-expressions/strict-logical-expressions": "error"
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: '0.53'
    }
  }
};