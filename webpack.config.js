var Encore = require('@symfony/webpack-encore');
var compressionPlugin = require('compression-webpack-plugin');
Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app','./assets/js/app.js')
    .addStyleEntry('global','./assets/css/global.scss')
    .enableSassLoader()
    .enableSingleRuntimeChunk()
    .addPlugin(new compressionPlugin({
        test: /\.(js|css)$/,
        filename: '[path].gz[query]',
        minRatio: 0.8,
        algorithm: 'gzip',
        deleteOriginalAssets: false
    }))
    .autoProvidejQuery()

    .cleanupOutputBeforeBuild()

    .enableSourceMaps(!Encore.isProduction())
;
module.exports = Encore.getWebpackConfig();