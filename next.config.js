const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')()

module.exports = withMDX(withCSS(withSass({
    target: 'serverless',
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // config.module.rules.push({
        //     test: /\.yaml$/,
        //     use: 'js-yaml-loader',
        // });

        return config;
    }
})));
