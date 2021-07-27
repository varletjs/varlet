import merge from 'webpack-merge'
import WebpackBarPlugin from 'webpackbar'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { BASE_CONFIG } from './webpack.base.config'
import { SITE_OUTPUT_PATH, PRIMARY_COLOR, SITE_PUBLIC_PATH } from '../shared/constant'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { HTML_WEBPACK_PLUGINS } from './webpack.dev.config'
import { VarletSitePlugin } from '../compiler/compileRoutes'

export function getBuildConfig() {
  return merge(BASE_CONFIG, {
    mode: 'production',
    output: {
      publicPath: './',
      path: SITE_OUTPUT_PATH,
      filename: 'js/[name].[contenthash:8].js',
      chunkFilename: 'js/[name].[contenthash:8].js',
    },
    plugins: [
      new WebpackBarPlugin({
        name: 'Site production building',
        color: PRIMARY_COLOR,
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [{ from: SITE_PUBLIC_PATH, to: SITE_OUTPUT_PATH }],
      }),
      new VarletSitePlugin(),
      ...HTML_WEBPACK_PLUGINS,
    ],
  })
}
