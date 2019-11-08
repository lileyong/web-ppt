const path = require('path')
const {
    VueLoaderPlugin
} = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const webpackConfig = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src/index.js'),
    devServer: {
        port: 8888,
        open: true,
        overlay: {
            errors: true
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.styl/,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                'stylus-loader'
            ]
        }, {
            test: /\.(jpg|jpeg|png|svg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name].[ext]'
                }
            }]
        }, {
            test: /\.(ttf|eot|woff)$/,
            loader: 'file-loader'
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            title: '财务前端开发培训',
            meta: {
                keywords: '财务,前端,开发,培训',
                description: '财务前端开发培训'
            }
        })
    ],
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src')
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    }
}

if (isDev) {
    webpackConfig.devtool = '#cheap-module-eval-source-map'
} else {
    webpackConfig.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue', 'element-ui']
    }
    webpackConfig.output.filename = '[name].[chunkhash:8].js'
    webpackConfig.plugins.push(
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css',
            chunkFilename: '[id].css'
        })
    )
    webpackConfig.optimization = {
        splitChunks: {
            name: 'vendor',
            chunks: 'all'
        }
    }
}

module.exports = webpackConfig
