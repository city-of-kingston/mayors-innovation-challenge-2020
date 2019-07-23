const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')()

module.exports = withMDX(withCSS(withSass({
    assetPrefix: process.env.NODE_ENV === 'production' ? '/mayors-innovation-challenge-2020' : '',
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // config.module.rules.push({
        //     test: /\.yaml$/,
        //     use: 'js-yaml-loader',
        // });

        return config;
    }
})));
