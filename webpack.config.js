const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    devtool: 'eval', // https://webpack.js.org/configuration/devtool/
    entry: './src/index.js',
    plugins: [new MiniCssExtractPlugin({
        filename: 'editor.css'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: { url: false, sourceMap: false }}
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'editor.js',
    }
}