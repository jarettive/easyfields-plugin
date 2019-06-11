module.exports = {
	output: {
		filename: 'easyfields-plugin.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/i,
				use: ['to-string-loader', 'css-loader']
			}
		]
	},
	watch: true
};