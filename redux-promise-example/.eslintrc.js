module.exports = {
  root: true,
  env: {
    "jest/globals": true,
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
  },
  plugins: ['react', 'flowtype', 'jsx-a11y', 'import', 'prettier', 'jest'],
  rules: {
    'prettier/prettier': [
      1,
      {
        singleQuote: true
      }
    ],
    'react/prop-types': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  },
  globals: {
    describe: true,
    it: true,
    expect: true,
    jest: true,
    mount: true,
    render: true,
    shallow: true
  }
};