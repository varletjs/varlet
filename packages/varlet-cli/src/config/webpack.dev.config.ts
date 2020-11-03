import merge from 'webpack-merge'
import WebpackBarPlugin from 'webpackbar'
import { createBaseConfig } from './webpack.base.config'

export function getDevConfig() {
  return merge(createBaseConfig() as any, {
    mode: 'development',
    devtool: 'source-map',
    output: {
      chunkFilename: 'js/[name].[chunkhash:8].js',
    },
    devServer: {
      port: 8080,
      host: 'localhost',
      publicPath: '/',
      stats: 'errors-only',
      disableHostCheck: true,
      hot: true
    },
    plugins: [
      new WebpackBarPlugin({
        name: 'Varlet development building',
        color: '#15DD6A'
      })
    ]
  })
}
