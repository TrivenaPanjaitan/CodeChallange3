const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: isProduction ? '/CodeChallange3' : '',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.scss', '.ttf', '.webp', '.png', '.svg'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp)$/i,
        type: 'asset',
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    hot: !isProduction,
    open: !isProduction,
  },
  plugins: [
    new Dotenv({
      path: `./.env.${isProduction ? 'production' : 'development'}`,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    ...(isProduction ? [new MiniCssExtractPlugin({ filename: 'styles.css' })] : []),
    ...(isProduction
      ? [
          new GenerateSW({
            exclude: [/\.map$/, /asset-manifest\.json$/],
            runtimeCaching: [
              {
                urlPattern: new RegExp('^https://.*'),
                handler: 'NetworkFirst',
              },
            ],
            skipWaiting: true,
            clientsClaim: true,
            dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
          }),
        ]
      : []),
    ...(isProduction ? [] : [new webpack.HotModuleReplacementPlugin()]),
  ],
};
