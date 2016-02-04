/**
 * ReactCompass - a carefully crafted Compass component for React.
 * https://github.com/virtyaluk/react-compass
 *
 * Copyright (c) 2016 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 */

import cfg from './dist.config.babel';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

cfg.output.filename = 'react-compass.min.js';
cfg.plugins[0] = new ExtractTextPlugin('react-compass.min.css');

export default cfg;