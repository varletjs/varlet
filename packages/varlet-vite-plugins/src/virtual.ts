import { normalizeToArray } from '@varlet/shared'
import { Plugin } from 'vite'
import { compileRoutes } from './compiler/compileRoutes.js'

export interface RouteOptions {
  /** 路径名 */
  path?: string
  /** component */
  component?: string
  /** 扫描目录 */
  scanDir?: string
  /** path的正则 */
  pathReg?: RegExp
  /** 子集 */
  child?: RouteOptions | RouteOptions[]
}

export interface VirtualOptions {
  /** 虚拟模块名称 */
  name: string
  /** 虚拟模块内容 */
  content?: string
  /** route mode */
  routes?: RouteOptions | RouteOptions[]
}

const getModuleIds = (option: VirtualOptions[]) => ({
    ids: option.map(({ name }) => name),
    vIds: option.map(({ name }) => `\0${name}`),
  })

const getModuleContent = async (option: VirtualOptions[]) => {
  const target: Record<string, string> = {}
  for (let i = 0; i < option.length; i++) {
    const { name, content, routes } = option[i]
    const vName = '\0' + name

    if (content) {
      target[vName] = content
    } else if (routes) {
      target[vName] = await compileRoutes(routes)
    }
  }
  return target
}

export async function virtual(option: VirtualOptions | VirtualOptions[]): Promise<Plugin> {
  const options = normalizeToArray(option)
  const { ids, vIds } = getModuleIds(options)
  const contents = await getModuleContent(options)

  return {
    name: 'vite-plugin-varlet-virtual',
    resolveId(id) {
      if (ids.includes(id)) {
        return `\0${id}`
      }
    },
    load(id) {
      if (vIds.includes(id)) {
        return contents[id]
      }
    },
  }
}
