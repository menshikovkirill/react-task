const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",

    module: {
        rules:[
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader:"babel-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/, 
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "images",
                            name: "[name]-[sha1:hash:7].[ext]"
                        }
                    }
                ]
            }, 
            {
                test:/\.(ttf)/, 
                loader:"file-loader"
            },
            {
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader,  'css-loader']
            }, 
            {
                test: /\.(scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    }, 

    plugins:[
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            title: "Heell",
        }), 
        new MiniCssExtractPlugin({
            filename: "main-[hash:8].css"
        })
    ], 

    devServer:{
        open:true
    }
};  