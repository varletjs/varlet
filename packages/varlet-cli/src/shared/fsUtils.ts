import slash from 'slash'
import { lstatSync, pathExistsSync, readdir, writeFileSync } from 'fs-extra'
import { extname, resolve } from 'path'
import { EXAMPLE_DIR_NAME, SITE_MOBILE_ROUTES, SRC_DIR } from './constant'

export function accessProperty(target: any, operator: string) {
  const keys: string[] = operator.split('.')
  return keys.reduce((value: any, key: string) => {
    if (value === null || value === undefined) {
      return null
    }
    return value[key]
  }, target)
}

export function isDir(path: string): boolean {
  return pathExistsSync(path) && lstatSync(path).isDirectory()
}

export function isSFC(path: string): boolean {
  return pathExistsSync(path) && extname(path) === '.vue'
}

export function convertMobileSiteExamplePathToComponentName(path: string): string {
  return path
    .replace(`/${EXAMPLE_DIR_NAME}/index.vue`, '')
    .replace(/.*\//g, '')
}

export async function getMobileSiteExamplePaths(): Promise<string[]> {
  const srcDir: string[] = await readdir(SRC_DIR)
  return srcDir
    .filter(path => isDir(resolve(SRC_DIR, path)))
    .map(path => resolve(SRC_DIR, path))
    .filter(path => isDir(resolve(path, EXAMPLE_DIR_NAME)))
    .map(path => resolve(path, EXAMPLE_DIR_NAME))
    .filter(path => pathExistsSync(resolve(path, 'index.vue')))
    .map(path => slash(resolve(path, 'index.vue')))
}

export async function buildMobileSiteRoutes() {
  if (!pathExistsSync(SRC_DIR)) {
    writeFileSync(SITE_MOBILE_ROUTES, 'export default []')
    return
  }

  const paths = await getMobileSiteExamplePaths()
  const routes = paths!.map(path => `
  {
    path: '/${convertMobileSiteExamplePathToComponentName(path)}',
    component: () => import('${path}')
  }\
`)

  writeFileSync(SITE_MOBILE_ROUTES, `export default [\
  ${routes.join(',')}
]`)
}
