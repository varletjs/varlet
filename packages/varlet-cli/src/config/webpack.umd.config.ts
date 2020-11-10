import merge from 'webpack-merge'
import { resolve } from 'path'
import { createBaseConfig } from './webpack.base.config'
import { ES_DIR, UMD_DIR } from '../shared/constant'
import { getVarletConfig } from './varlet.config'
import { accessProperty, bigCamelize } from '../shared/fsUtils'
import { VueLoaderPlugin } from 'vue-loader'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function getUmdConfig() {
  const varletConfig = getVarletConfig()
  const namespace = accessProperty(varletConfig, 'namespace')

  return merge(createBaseConfig() as any, {
    mode: 'production',
    entry: resolve(ES_DIR, 'index.js'),
    output: {
      path: UMD_DIR,
      filename: `${namespace}.js`,
      library: `${bigCamelize(namespace)}`,
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    externals: {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
      }
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: `${namespace}.css`
      }),
    ]
  })
}
