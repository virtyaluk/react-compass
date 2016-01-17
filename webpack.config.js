/**
 * ReactCompass - a carefully crafted Compass component for React.
 *
 * Copyright (c) 2016 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 */

module.exports = {
    entry: './src/example.jsx',
    output: {
        publicPath: 'http://localhost:9090/assets'
    },
    module: {
        loaders: require('./loaders.config')
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};