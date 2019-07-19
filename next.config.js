const withSass = require('@zeit/next-sass');

module.exports = withSass({
	target: 'serverless',
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.yaml$/,
            use: 'js-yaml-loader',
        });

        return config;
    }
});
