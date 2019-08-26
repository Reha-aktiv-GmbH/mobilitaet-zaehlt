var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')

    .setPublicPath('/build')

    .addEntry('app','./assets/js/app.js')
    .addStyleEntry('some_page', './assets/css/hover_effect_image.css')
    .addStyleEntry('card-rotation', './assets/css/rotating-card.css')
    .enableSassLoader()
    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .addLoader({
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        options: {
            name: '/[name].[ext]',
            publicPath: '/build',
            outputPath: 'images'
        }
    })
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
;
module.exports = Encore.getWebpackConfig();