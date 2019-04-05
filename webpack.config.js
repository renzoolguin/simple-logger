const path = require('path');

module.exports = () => {
  return {
    entry: ['@babel/polyfill', `./${process.env.npm_package_config_export}`],
    output: {
      filename: `${process.env.npm_package_name}.js`,
      path: path.resolve(__dirname, process.env.npm_package_config_dist)
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
