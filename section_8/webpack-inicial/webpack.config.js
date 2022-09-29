
const HtmlWebPack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

	mode: "development",

	// limpia los archivos que se crearon anteriormente
	output: {
		clean: true,
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

			}
		],
	},

	optimization: {},

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