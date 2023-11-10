/** @type {import('next').NextConfig} */
const nextConfig = {};

const withImages = require('next-images');

module.exports = withImages({
	webpack(config, options) {
		config.module.rules.push({
			test: /\.(mp4|webm|ogg)$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: 'videos/[name].[ext]',
					},
				},
			],
		});
		return config;
	},
});

module.exports = nextConfig;
