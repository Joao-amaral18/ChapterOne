const { resolve, dirname } = require('path');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports={
    mode: isDevelopment?'development':'production',
    devtool: isDevelopment?'eval-source-map':'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output:{
        path:resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer:{
        static: path.resolve(__dirname, 'public'),
    },
    //import js bundle to html//
    plugins:[
        new htmlWebpackPlugin({
         template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        ////////////////////////
    ],
    module:{
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
                
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                
            },
        ]
    }
    
}