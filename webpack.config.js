const path = require('path');

module.exports = {
	// Other webpack configuration settings...

	module: {
		rules: [
			// TypeScript rule
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},

			// PDF file rule
			{
				test: /\.(pdf)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'components/CVDownload/',
						},
					},
				],
			},
		],
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'app'),
		port: 3000, // Specify the port you want to use
	},

	// Other webpack configuration settings...
};
