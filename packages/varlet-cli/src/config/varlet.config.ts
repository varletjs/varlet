import { pathExistsSync } from 'fs-extra'
import { VARLET_CONFIG } from '../shared/constant'

export const defaultConfig = {
  pc: {
    title: 'Varlet 组件库文档',
    description: 'Varlet 组件库文档',
    logo: 'https://cn.vuejs.org/images/logo.png'
  },
  mobile: {
    title: 'Varlet 组件库示例',
    description: 'Varlet 组件库示例',
    logo: 'https://cn.vuejs.org/images/logo.png'
  }
}

export function getVarletConfig() {
  return pathExistsSync(VARLET_CONFIG) && require(VARLET_CONFIG) || defaultConfig
}
