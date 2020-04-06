/* eslint-disable @typescript-eslint/no-var-requires */
const withTypeScript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
module.exports = withTypeScript(
  /* config options here */
  withSass({
    webpack(config) {
      return config
    },
    cssModules: true,
    sassLoaderOptions: {}
    // typescriptLoaderOptions: {
    //   transpileOnly: false
    // }
  })
)
