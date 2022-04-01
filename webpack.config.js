require('dotenv/config');
const path = require('path');

const srcPath = path.join(__dirname, 'src');
const publicPath = path.join(__dirname, 'public');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: srcPath,
  output: {
    path: publicPath
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcPath,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: process.env.DEV_SERVER_PORT,
    static: {
      directory: publicPath,
      publicPath: '/',
      watch: true
    },
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`
    }
  },
  stats: 'summary',
  performance: {
    hints: false
  }
};
