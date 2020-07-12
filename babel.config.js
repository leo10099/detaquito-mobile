module.exports = api => {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'babel-plugin-styled-components',
			'inline-dotenv',
			[
				'babel-plugin-root-import',
				{
					paths: [
						{
							rootPathPrefix: '~',
							rootPathSuffix: './src',
						},
						{
							rootPathPrefix: '!',
							rootPathSuffix: './src/components',
						},
						{
							rootPathPrefix: '#',
							rootPathSuffix: './src/assets',
						},
						{
							rootPathPrefix: '$',
							rootPathSuffix: './src/screens',
						},
					],
				},
			],
		],
	};
};
