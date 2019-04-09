const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [
    {
        mode: 'development',
        entry: {
            index: './public/js/index.js',
            home: './public/js/home.js',
            model: './public/js/model.js',
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist'
        },
        plugins: [
            new CleanWebpackPlugin(),
        ],
        output: {
            filename: '[name]-bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                {
                    test: /\.scss$/,
                    use: [{
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['node_modules/']
                        }
                    }]
                }
            ]
        },
    }
]