module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@types': './src/@types',
          '@navigation': './src/navigation',
          '@context': './src/context',
          '@config': './src/config',
          '@constants': './src/constants',
          '@styles': './src/styles',
          '@storage': './src/storage',
        }
      }]
    ],
  };
};
