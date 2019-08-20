var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')

    .setPublicPath('/build')

    .addEntry('app','./assets/js/app.js')
    .addStyleEntry('some_page', './assets/css/hover_effect_image.css')
    .enableSassLoader()
    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
;
module.exports = Encore.getWebpackConfig();