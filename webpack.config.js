const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    // 'development' | 'production'
    mode: process.env.NODE_ENV,
    // entry points -> ts ファイルを指定（複数可）
    // https://webpack.js.org/concepts/entry-points/#multi-page-application
    entry: {
        "main": path.resolve(__dirname, "src/main.ts")
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                // ローダーをチェーン化する場合は 右 -> 左 で処理
                // https://webpack.js.org/configuration/module/#ruleuse
                loaders: ["babel-loader", "ts-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["ts/*"])
    ]
};