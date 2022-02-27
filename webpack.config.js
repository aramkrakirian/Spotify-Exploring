const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env', '@babel/preset-react'] },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  devServer: {
    compress: true,
    port: 8080,
    proxy: { '/': 'http://localhost:3000' },
  },
};
