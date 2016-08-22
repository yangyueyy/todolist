var path = require('path');

module.exports = {
    entry: './public/src/main.js',
    output: {
        path: path.join(__dirname, 'public/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js|jsx$/, loaders: ['babel'] }
        ]
    }
}
