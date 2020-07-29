const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
   entry: './src/index.tsx',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
   },
   devServer: {
      hot: true,
      open: true
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
         }
      ]
   },
   optimization: {
      splitChunks: {
         name: 'commons',
         chunks: 'all',
         minSize: 0,
         filename: '[name].js'
      }
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.join(__dirname, 'public', 'index.html')
      }),
      new webpack.HotModuleReplacementPlugin()
   ]
}