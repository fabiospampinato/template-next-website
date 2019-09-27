
/* IMPORT */

const OptimizeCSSAssetsPlugin = require ( 'optimize-css-assets-webpack-plugin' ),
      TsconfigPathsPlugin = require ( 'tsconfig-paths-webpack-plugin' ),
      withSass = require ( '@zeit/next-sass' );

/* CONFIG */

const config = withSass ({
  webpack ( config ) {
    if ( !config.resolve.plugins ) config.resolve.plugins = [];
    config.resolve.plugins.push ( new TsconfigPathsPlugin () );
    if ( !config.optimization.minimizer ) config.optimization.minimizer = [];
    config.optimization.minimizer.push ( new OptimizeCSSAssetsPlugin () );
    if ( !config.module.rules ) config.module.rules = [];
    config.module.rules.unshift ({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    });
    return config;
  },
  experimental: {
    publicDirectory: true
  }
});

/* EXPORT */

module.exports = config;
