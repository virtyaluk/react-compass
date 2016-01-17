/**
 * ReactCompass - a carefully crafted Compass component for React.
 *
 * Copyright (c) 2016 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 */

module.exports = [
    {
        test: /(\.jsx|\.js)$/,
        preLoaders: ['eslint-loader'],
        loaders: ['babel-loader'],
        exclude: /(node_modules|bower_components)/
    }
];