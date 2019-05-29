const webpack = require('webpack');
const resolve = require('path').resolve;

const config = {
  devtool: 'eval-source-map',
  entry: __dirname + '/ui/index.js',
  output: {
    path: resolve('public/bundle'),
    filename: 'bundle.js',
    publicPath: 'public/bundle/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [{
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: 'public/bundle/fonts/'
          }
        }]
      }
    ]
  }
};
module.exports = config;
