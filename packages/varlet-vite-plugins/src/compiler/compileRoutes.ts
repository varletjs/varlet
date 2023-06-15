import { normalizeToArray } from '@varlet/shared'
import { glob } from '../shared/fsUtils.js'
import { RouteOptions } from '../virtual'

export function getComponentDocRoutePath(filePaths: string, pathReg: RegExp) {
  const [, routePath, language] = filePaths.match(pathReg) ?? []
  // /后面的值为undefined的时候，就不需要这段path
  return `{
    path: '${language ? `/${language}` : ''}${routePath ? `/${routePath}` : ''}',
    component: () => import('${filePaths}')
  }`
}

async function getRoutesByScanDir(reg: string, pathReg: RegExp) {
  const filePaths = await glob(reg)
  const routes = filePaths.map((filePath) => {
    return getComponentDocRoutePath(filePath, pathReg)
  })
  return routes
}

// 递归处理路由
async function getRoutes(options: RouteOptions[] | RouteOptions): Promise<string | undefined> {
  if (!options) {
    return undefined
  }
  const arr = normalizeToArray(options)
  const routes = []
  for (let i = 0; i < arr.length; i++) {
    const { path, component, scanDir, pathReg, child } = arr[i]
    if (path && component) {
      const route = `{
        path:'${path}',
        component: () => import('${component}'),
        ${
          child
            ? `children: [
          ${await getRoutes(child)}
        ]`
            : ''
        } }`
      routes.push(route)
    } else if (scanDir && pathReg) {
      const res = await getRoutesByScanDir(scanDir, pathReg)
      routes.push(...res)
    }
  }
  return routes.join(',')
}

export async function compileRoutes(options: RouteOptions[] | RouteOptions) {
  const routes = await getRoutes(options)
  return `export default [
    ${routes}
  ]`
}
