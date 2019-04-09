const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'vandermeer.js',
    path: path.resolve(__dirname, 'assets'),
  },
  mode: 'production', // development
}
