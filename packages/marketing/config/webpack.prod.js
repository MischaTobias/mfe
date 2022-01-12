const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const test = 'testforyml';

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[hashname].js',
    publicPath: '/marketing/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
