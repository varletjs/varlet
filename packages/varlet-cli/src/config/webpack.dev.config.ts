import merge from 'webpack-merge'
import WebpackBarPlugin from 'webpackbar'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BASE_CONFIG } from './webpack.base.config'
import { PRIMARY_COLOR } from '../shared/constant'
import { resolve } from 'path'
import { get } from 'lodash'
import { getVarletConfig } from './varlet.config'
import { VarletSitePlugin } from '../compiler/compileSiteEntry'

const varletConfig = getVarletConfig()

export function createHtmlPluginOptions(type: 'pc' | 'mobile') {
  return {
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
    },
    hash: true,
    chunks: [type],
    title: get(varletConfig, `${type}.title['zh-CN']`),
    logo: get(varletConfig, `logo`),
  }
}

export const HTML_WEBPACK_PLUGINS = [
  new HtmlWebpackPlugin({
    template: resolve(__dirname, '../../site/pc/index.html'),
    filename: 'index.html',
    ...createHtmlPluginOptions('pc'),
  }),
  new HtmlWebpackPlugin({
    template: resolve(__dirname, '../../site/mobile/mobile.html'),
    filename: 'mobile.html',
    ...createHtmlPluginOptions('mobile'),
  }),
]

export function getDevConfig() {
  return merge(BASE_CONFIG, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      port: get(varletConfig, 'port'),
      host: get(varletConfig, 'host'),
      publicPath: '/',
      stats: 'errors-only',
      disableHostCheck: true,
      hot: true,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          chunks: {
            chunks: 'all',
            minChunks: 2,
            minSize: 0,
            name: 'chunks',
          },
        },
      },
    },
    plugins: [
      new WebpackBarPlugin({
        name: 'Site development building',
        color: PRIMARY_COLOR,
      }),
      new VarletSitePlugin(),
      ...HTML_WEBPACK_PLUGINS,
    ],
  })
}
