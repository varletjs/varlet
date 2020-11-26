import merge from 'webpack-merge'
import WebpackBarPlugin from 'webpackbar'
import { createBaseConfig, createBasePlugins } from './webpack.base.config'
import { getVarletConfig } from './varlet.config'
import { accessProperty } from '../shared/fsUtils'

export function getDevConfig() {
  const varletConfig = getVarletConfig()
  return merge(createBaseConfig() as any, {
    mode: 'development',
    devtool: 'source-map',
    output: {
      chunkFilename: 'js/[name].[chunkhash:8].js',
    },
    devServer: {
      port: accessProperty(varletConfig, 'port'),
      host: accessProperty(varletConfig, 'host'),
      publicPath: '/',
      stats: 'errors-only',
      disableHostCheck: true,
      hot: true
    },
    plugins: [
      new WebpackBarPlugin({
        name: 'Site development building',
        color: '#15DD6A'
      }),
      ...createBasePlugins()
    ]
  })
}
