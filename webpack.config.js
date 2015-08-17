var path = require('path');
var webpack = require('webpack');


module.exports = {
  context: __dirname + "/app",
  entry: [
    'webpack-dev-server/client?http://react-webpack-aquinault.c9.io:8080',
    'webpack/hot/only-dev-server',
    './app.js',
    './index.html',
    //'./bower_components/modernizr/modernizr.js',
    //'./bower_components/jquery/dist/jquery.js',
    //'./bower_components/Chart.js/Chart.js'
  ],
  //entry: {
  //    javascript: "./app.js",
  //    html: "./index.html",
  //  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
    //publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
      loaders: [
        { test: /\.png$/, loader: 'file?name=[name].[ext]' },
        { test: /\.mp4$/, loader: 'file?name=[name].[ext]' },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ["react-hot", "babel-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ["babel-loader"],
        },
        {
          test: /\.html$/,
          loader: "file?name=[name].[ext]",
        },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        
        //{ test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,loader : 'file-loader' }
        { test: /\.less$/, loader: "style!css!less" },
        { test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/, loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]' }
        //{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        //{ test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
        //{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        //{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },      
      ],
    },
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        noInfo: false, //  --no-info option
        hot: true,
        inline: true
    }
}

