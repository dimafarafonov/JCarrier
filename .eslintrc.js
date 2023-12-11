module.exports = {
  root: true,
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    'react-native/react-native': true,
  },
  rules: {
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 1,
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
