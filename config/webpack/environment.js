const { environment } = require('@rails/webpacker')

environment.loaders.append('json', {
  test: /\.json$/,
  use: 'json-loader'
});

environment.loaders.get('babel').use[0].options = {
  presets: ['es2015'],
  plugins: ['transform-runtime']
};

module.exports = environment
