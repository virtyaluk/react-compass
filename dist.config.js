/**
 * ReactCompass - a carefully crafted Compass component for React.
 *
 * Copyright (c) 2016 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 */

module.exports = {
    entry: './src/ReactCompass.jsx',
    output: {
        path: __dirname + '/dist',
        libraryTarget: 'umd',
        library: 'ReactCompass',
        filename: 'react-compass.js'
    },
    devtool: 'source-map',
    module: {
        loaders: require('./loaders.config')
    },
    externals: {
        react: 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};