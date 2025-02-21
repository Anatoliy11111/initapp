const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/, // Для обычных изображений
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192, // Если размер меньше указанного лимита, файл будет встроен в base64
                            fallback: 'file-loader', // Если больше лимита, будет использован file-loader
                        },
                    },
                ],
            },
            {
                test: /\.svg$/, // Для SVG-файлов
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000, // Аналогично url-loader
                            noquotes: true, // Удаляет кавычки вокруг #id в атрибуте fill
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
}
