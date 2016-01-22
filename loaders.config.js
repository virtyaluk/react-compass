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
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
    },
    {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|bower_components|example|dist)/
    }
];