import slash from 'slash'
import chokidar from 'chokidar'
import {
  DOCS_DIR_NAME,
  EXAMPLE_DIR_INDEX,
  EXAMPLE_DIR_NAME,
  ROOT_DOCS_DIR,
  SITE,
  SITE_DIR,
  SITE_DOCS_GLOB,
  SITE_EXAMPLE_GLOB,
  SITE_MOBILE_ROUTES,
  SITE_PC_ROUTES,
  SRC_DIR,
  VARLET_CONFIG,
} from '../shared/constant'
import { copy, copySync, pathExistsSync, readdir, readdirSync } from 'fs-extra'
import { resolve } from 'path'
import { isMD, outputFileSyncOnChange } from '../shared/fsUtils'
import { getVarletConfig } from '../config/varlet.config'
import type { Compiler } from 'webpack'
import type { FSWatcher } from 'chokidar'

const EXAMPLE_COMPONENT_NAME_RE = /\/([-\w]+)\/example\/index.vue/
const COMPONENT_DOCS_RE = /\/([-\w]+)\/docs\/([-\w]+)\.md/
const ROOT_DOCS_RE = /\/docs\/([-\w]+)\.([-\w]+)\.md/

export function getExampleRoutePath(examplePath: string): string {
  return '/' + examplePath.match(EXAMPLE_COMPONENT_NAME_RE)?.[1]
}

export function getComponentDocsRoutePath(componentDocsPath: string): string {
  const [, routePath, language] = componentDocsPath.match(COMPONENT_DOCS_RE) ?? []

  return `/${language}/${routePath}`
}

export function getRootDocsRoutePath(rootDocsPath: string): string {
  const [, routePath, language] = rootDocsPath.match(ROOT_DOCS_RE) ?? []

  return `/${language}/${routePath}`
}

export async function findExamplePaths(): Promise<string[]> {
  const dir: string[] = await readdir(SRC_DIR)

  const buildPath = (filename: string) => resolve(SRC_DIR, filename, EXAMPLE_DIR_NAME, EXAMPLE_DIR_INDEX)

  const existPath = (filename: string) => pathExistsSync(buildPath(filename))

  const slashPath = (filename: string) => slash(buildPath(filename))

  return dir.filter(existPath).map(slashPath)
}

export async function findComponentDocsPaths(): Promise<string[]> {
  const dir: string[] = await readdir(SRC_DIR)

  const buildPath = (filename: string) => resolve(SRC_DIR, filename, DOCS_DIR_NAME)

  const existPath = (filename: string) => pathExistsSync(buildPath(filename))

  const collectRoutePath = (routePaths: string[], filename: string) => {
    const dirPath = buildPath(filename)

    readdirSync(dirPath).forEach((mdName: string) => {
      const path = resolve(dirPath, mdName)
      isMD(path) && routePaths.push(slash(path))
    })

    return routePaths
  }

  return dir.filter(existPath).reduce(collectRoutePath, [])
}

export async function findRootDocsPaths(): Promise<string[]> {
  if (!pathExistsSync(ROOT_DOCS_DIR)) {
    return []
  }

  const dir: string[] = await readdir(ROOT_DOCS_DIR)

  const buildPath = (filename: string) => resolve(ROOT_DOCS_DIR, filename)

  const existPath = (filename: string) => isMD(buildPath(filename))

  const slashPath = (filename: string) => slash(buildPath(filename))

  return dir.filter(existPath).map(slashPath)
}

export async function buildMobileSiteRoutes() {
  const examplePaths: string[] = await findExamplePaths()

  const routes = examplePaths.map(
    (examplePath) => `
  {
    path: '${getExampleRoutePath(examplePath)}',
    component: () => import('${examplePath}')
  }\
`
  )

  const source = `export default [\
  ${routes.join(',')}
]`

  await outputFileSyncOnChange(SITE_MOBILE_ROUTES, source)
}

export async function buildPcSiteRoutes() {
  const [componentDocsPaths, rootDocsPaths] = await Promise.all([findComponentDocsPaths(), findRootDocsPaths()])

  const componentDocsRoutes = componentDocsPaths.map(
    (componentDocsPath) => `
  {
    path: '${getComponentDocsRoutePath(componentDocsPath)}',
    // @ts-ignore
    component: () => import('${componentDocsPath}')
  }\
`
  )

  const rootDocsRoutes = rootDocsPaths.map(
    (rootDocsPath) => `
  {
    path: '${getRootDocsRoutePath(rootDocsPath)}',
    // @ts-ignore
    component: () => import('${rootDocsPath}')
  }\
`
  )

  const source = `export default [\
  ${[...componentDocsRoutes, rootDocsRoutes].join(',')}
]`

  outputFileSyncOnChange(SITE_PC_ROUTES, source)
}

export async function buildSiteSource() {
  return copy(SITE, SITE_DIR)
}

export async function buildSiteEntry() {
  getVarletConfig()
  await Promise.all([buildMobileSiteRoutes(), buildPcSiteRoutes(), buildSiteSource()])
}
