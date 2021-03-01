import slash from 'slash'
import {
  DOCS_DIR_NAME,
  EXAMPLE_DIR_INDEX,
  EXAMPLE_DIR_NAME,
  ROOT_DOCS_DIR,
  SITE_MOBILE_ROUTES,
  SITE_PC_ROUTES,
  SRC_DIR,
} from '../shared/constant'
import { pathExistsSync, readdir, readdirSync, writeFile } from 'fs-extra'
import { resolve } from 'path'
import { isMD } from '../shared/fsUtils'

const EXAMPLE_COMPONENT_NAME_RE = /\/([-\w]+)\/example\//
const COMPONENT_DOCS_RE = /\/([-\w]+)\/docs\/([-\w]+)\.md/
const ROOT_DOCS_RE = /\/docs\/([-\w]+)\.([-\w]+)\.md/

export function getExampleRoutePath(examplePath: string): string {
  return '/' + examplePath.match(EXAMPLE_COMPONENT_NAME_RE)?.[1]
}

export function getComponentDocsRoutePath(componentDocsPath: string): string {
  const [_, routePath, language] = componentDocsPath.match(COMPONENT_DOCS_RE) ?? []

  return `/${language}/${routePath}`
}

export function getRootDocsRoutePath(rootDocsPath: string): string {
  const [_, routePath, language] = rootDocsPath.match(ROOT_DOCS_RE) ?? []

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

  await writeFile(
    SITE_MOBILE_ROUTES,
    `export default [\
  ${routes.join(',')}
]`
  )
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

  await writeFile(
    SITE_PC_ROUTES,
    `export default [\
  ${[...componentDocsRoutes, rootDocsRoutes].join(',')}
]`
  )
}
