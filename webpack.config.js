module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [
    { test: /\.jsx/, loader: 'jsx-loader?harmony' },
    /*
    { test: /\.html$/i, loader: "html" },
    { test: /\.css$/i, loader: "css" },
  { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
  loader: "file" }
  */
  ]
}
};
