module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['/src'],
        alias: {
          '@': './src',
          'api': './src/api',
          'app': './src/app',
          'assets': './src/assets',
          'features': './src/features',
          'navigations': './src/navigations',
          'screens': './src/screens',
          'utils': './src/utils',
        }
      }
    ]
  ]
};
