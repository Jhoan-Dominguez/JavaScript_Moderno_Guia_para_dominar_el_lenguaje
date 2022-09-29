
const HtmlWebPack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizer = require("css-minimizer-webpack-plugin");
const Terser = require("terser-webpack-plugin");

module.exports = {

	mode: "production",

	// limpia los archivos que se crearon anteriormente
	output: {
		clean: true,
		filename: "main.[contenthash].js"
	},

	module: {
		rules: [
			{
				// para que lleve todos los archivos .html
				test: /\.html$/,
				loader: "html-loader",
				options: {
					sources: false,
				}
			},
			{
				test: /\.css$/,
				exclude: "/styles.css$/",
				use: ["style-loader", "css-loader"],
			},
			{
				test: "/styles.css$/",
				use: [MiniCssExtract.loader, "css-loader"]

			},
			{
				test: /\.(png|jpe?g|gif)$/,
				loader: "file-loader",

			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
					presets: ['@babel/preset-env']
					}
				}
			}
		],
	},

	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizer(),
			new Terser(),
		]
	},

	plugins: [
		// me permite cambiar el titulo de mi app, cambiar el nombre de mi archivo .html
		new HtmlWebPack({
			title: "Mi Webpack App",
			filename: "index.html",
			template: "./src/index.html"
		}),

		new MiniCssExtract({
			filename: "[name].[fullhash].css",
			ignoreOrder: false,
		}),

		new CopyPlugin({
			patterns: [
				{from: "src/assets/", to: "assets/"}
			]
		})
	],

}