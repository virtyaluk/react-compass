/**
 * ReactCompass - a carefully crafted Compass component for React.
 * https://github.com/virtyaluk/react-compass
 *
 * Copyright (c) 2016 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 */

import { BannerPlugin } from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let autoprefixerCfg = { browsers: ['last 3 versions'] },
    srcLibName = 'ReactCompass',
    distLibName = 'react-compass',
    banner = `ReactCompass - a carefully crafted Compass component for React.
https://github.com/virtyaluk/react-compass
Copyright (c) 2016 Bohdan Shtepan
http://modern-dev.com/
Licensed under the MIT license.`;

export default {
    entry: `./src/${srcLibName}.jsx`,
    output: {
        path: __dirname + '/dist',
        libraryTarget: 'umd',
        library: srcLibName,
        filename: distLibName + '.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules|bower_components|dist)/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(distLibName + '.css'),
        new BannerPlugin(banner)
    ],
    sassLoader: {
        outputStyle: 'nested'
    },
    postcss: () => [autoprefixer(autoprefixerCfg)],
    externals: {
        react: 'React',
        'react-style-normalizer': 'styleNormalizer'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    }
};