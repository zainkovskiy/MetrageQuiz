const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist', 'v-0.0.4'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    // alias: {
    //   components: path.resolve(__dirname, 'src', 'components'),
    //   pages: path.resolve(__dirname, 'src', 'pages'),
    //   router: path.resolve(__dirname, 'src', 'router.tsx'),
    // },
  },
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
