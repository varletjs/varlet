import merge from 'webpack-merge'
import { resolve } from 'path'
import { BASE_CONFIG } from './webpack.base.config'
import { ES_DIR, UMD_DIR } from '../shared/constant'
import { getVarletConfig } from './varlet.config'
import { accessProperty, bigCamelize } from '../shared/fsUtils'

export function getUmdConfig() {
  const varletConfig = getVarletConfig()
  const namespace = accessProperty(varletConfig, 'namespace')

  return merge(BASE_CONFIG as any, {
    mode: 'production',
    entry: resolve(ES_DIR, 'umdIndex.js'),
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
      },
    }
  })
}
