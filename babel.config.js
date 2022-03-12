module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@screens': './src/screens/',
          '@react-concepts': './src/testing_react_concepts_screens/',
        },
      },
    ],
  ],
};
