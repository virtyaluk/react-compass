module.exports = {
    entry: './src/index.jsx',
    output: {
        path         : __dirname + '/dist',
        libraryTarget: 'umd',
        library      : 'ReactCompass',
        filename     : 'react-compass.js'
    },
	devtool: 'source-map',
    module: {
        loaders: require('./loaders.config')
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}