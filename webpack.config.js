const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    // Components for '/config' route
    home: path.join(__dirname, 'app/src/home.js'),
  },
  output: {
    path: path.join(__dirname, 'app/static/bundles'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app/src'),
        exclude: /node_modules/,
        query: {
          presets: [
            'react',
            ['env', {
              "modules": false,
              "targets": {
                "browsers": ["last 2 Chrome versions"]
              }
            }]
          ],
          'plugins': [],
        }
      }
    ]
  },
};
