var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        visualizer: './editor/visualizer.js',
        webpackTest: './webpack-test/app.js',
        formBuilder: './FormBuilder/FormBuild.js'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
}