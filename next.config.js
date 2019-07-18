module.exports = {
	target: 'serverless',
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.yaml$/,
            use: 'js-yaml-loader',
        });

        return config;
    }
}