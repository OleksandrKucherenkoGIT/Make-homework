let HtmlWebPackPlugin = require("html-webpack-plugin")
let MiniCssExtractPlugin = require("mini-css-extract-plugin")
let CopyWebpackPlugin = require('copy-webpack-plugin')
let HtmlBeautifyPlugin = require('html-beautify-webpack-plugin')
let path = require("path")
let conf = {
    entry: "./src/index.js" ,
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "main.js",
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                resolve: {
                    extensions: ['.ts', '.js']
                },
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread', "@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true}
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true}
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true}
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Homework_12',
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([{
            from: './src/static/img',
            to: './static/img'
        },
        ]),
        new HtmlBeautifyPlugin({
            config: {
                html: {
                    end_with_newline: true,
                    indent_size: 2,
                    indent_with_tabs: true,
                    indent_inner_html: true,
                    preserve_newlines: true
                }
            },
            replace: [' type="text/javascript"']
        })
    ]

}

module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production
                    ? 'source-map'
                    : 'eval-sourcemap';

    return conf;
}