module.exports = {
  entry: './app.jsx',
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [
  { test: /\.jsx/, loader: 'jsx-loader?harmony' }
  ]
}
};
