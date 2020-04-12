/* eslint-disable @typescript-eslint/no-var-requires */
const withTypeScript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
// const compose = require('next-compose')
const withImages = require('next-images')
module.exports = withTypeScript(
  /* config options here */
  withImages(
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
)
