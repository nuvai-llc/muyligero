const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('config');

const { logger } = require('./server/log.js');

const webpackConfig = require('./webpack.development.config');

logger.info('Starting MuyLigero web dev server...');

new WebpackDevServer(webpack(webpackConfig), {
    contentBase: __dirname,
    historyApiFallback: true,
    disableHostCheck: true,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: {
        cached: false,
        cachedAssets: false,
        colors: { level: 2 },
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
    },
}).listen(config.get('devServerPort'), (err) => {
    if (err) {
        logger.info(err);
        process.exit(1);
    }

    logger.info(`Webpack dev server listening on port ${config.get('devServerPort')}`);
});
