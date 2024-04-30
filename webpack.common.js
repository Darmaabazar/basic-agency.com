const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'services.html',
            template: './src/services.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/about.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            template: './src/blog.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'thinking.html',
            template: './src/thinking.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'careers.html',
            template: './src/careers.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/contact.html',
        }),
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: {
            keep: /media\//,
        },
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
       },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                  "style-loader",
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1,
                    }
                  },
                  {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: [
                          [
                            "postcss-nested",
                            "autoprefixer"
                          ],
                        ],
                      },
                    },
                  },
                ],
              },
        ],
    },
};