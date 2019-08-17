const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const autoprefixer = require('autoprefixer');
const WebpackBaseConfig = require('./webpack.config');

module.exports = {
    mode: 'production',
    ...WebpackBaseConfig,
    module: {
        ...WebpackBaseConfig.module,
        rules: [
            ...WebpackBaseConfig.module.rules,
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [autoprefixer()]
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        ...WebpackBaseConfig.plugins,
        new MiniCssExtractPlugin({
            filename: 'styles.[hash].css'
        })
    ]
};
