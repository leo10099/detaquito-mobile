module.exports = api => {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'babel-plugin-styled-components',
			[
				'babel-plugin-root-import',
				{
					paths: [
						{
							rootPathPrefix: '~/',
							rootPathSuffix: './src',
						},
						{
							rootPathPrefix: '~public/',
							rootPathSuffix: './src/screens/Public',
						},
					],
				},
			],
		],
	};
};
