import merge from 'webpack-merge'
import { resolve } from 'path'
import { BASE_CONFIG } from './webpack.base.config'
import { ES_DIR, UMD_DIR } from '../shared/constant'
import { varletConfig } from './varlet.config'
import { get } from 'lodash'

export function getUmdConfig() {
  const name: string = get(varletConfig, 'name')

  return merge(BASE_CONFIG, {
    mode: 'production',
    entry: resolve(ES_DIR, 'umdIndex.js'),
    output: {
      path: UMD_DIR,
      filename: `${name.toLocaleLowerCase()}.js`,
      library: name,
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
    },
  })
}
