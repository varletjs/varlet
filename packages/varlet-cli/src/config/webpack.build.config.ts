import merge from 'webpack-merge'
import WebpackBarPlugin from 'webpackbar'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { createBaseConfig, createBasePlugins } from './webpack.base.config'
import { OUTPUT_SITE_PATH } from '../shared/constant'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export function getBuildConfig() {
  return merge(createBaseConfig() as any, {
    mode: 'production',
    output: {
      publicPath: './',
      path: OUTPUT_SITE_PATH,
      filename: '[name].[hash:8].js',
      chunkFilename: 'js/[name].[chunkhash:8].js',
    },
    plugins: [
      new WebpackBarPlugin({
        name: 'Site production building',
        color: '#15DD6A'
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash:8].css',
        chunkFilename: 'css/[id].[chunkhash:8].css'
      }),
      new CleanWebpackPlugin(),
      ...createBasePlugins()
    ]
  })
}
