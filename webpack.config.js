const path = require('path');

module.exports = () => {
  return {
    entry: ['@babel/polyfill', `./${process.env.npm_package_main}`],
    output: {
      filename: `${process.env.npm_package_name}.js`,
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  };
};
