import {
  DOCS_DIR_NAME,
  EXAMPLE_DIR_INDEX,
  EXAMPLE_DIR_NAME,
  ROOT_DOCS_DIR,
  SITE,
  SITE_DIR,
  SITE_MOBILE_ROUTES,
  SITE_PC_ROUTES,
  SRC_DIR,
} from '../shared/constant'
import { copy } from 'fs-extra'
import { glob, outputFileSyncOnChange } from '../shared/fsUtils'
import { getVarletConfig } from '../config/varlet.config'

const EXAMPLE_COMPONENT_NAME_RE = /\/([-\w]+)\/example\/index.vue/
const COMPONENT_DOCS_RE = /\/([-\w]+)\/docs\/([-\w]+)\.md/
const ROOT_DOCS_RE = /\/docs\/([-\w]+)\.([-\w]+)\.md/

export function getExampleRoutePath(examplePath: string): string {
  return '/' + examplePath.match(EXAMPLE_COMPONENT_NAME_RE)?.[1]
}

export function getComponentDocRoutePath(componentDocsPath: string): string {
  const [, routePath, language] = componentDocsPath.match(COMPONENT_DOCS_RE) ?? []

  return `/${language}/${routePath}`
}

export function getRootDocRoutePath(rootDocsPath: string): string {
  const [, routePath, language] = rootDocsPath.match(ROOT_DOCS_RE) ?? []

  return `/${language}/${routePath}`
}

export function findExamples(): Promise<string[]> {
  return glob(`${SRC_DIR}/**/${EXAMPLE_DIR_NAME}/${EXAMPLE_DIR_INDEX}`)
}

export function findComponentDocs(): Promise<string[]> {
  return glob(`${SRC_DIR}/**/${DOCS_DIR_NAME}/*.md`)
}

export function findRootDocs(): Promise<string[]> {
  return glob(`${ROOT_DOCS_DIR}/*.md`)
}

export async function buildMobileSiteRoutes() {
  const examples: string[] = await findExamples()

  const routes = examples.map(
    (example) => `
  {
    path: '${getExampleRoutePath(example)}',
    // @ts-ignore
    component: () => import('${example}')
  }\
`
  )

  const source = `export default [\
  ${routes.join(',')}
]`

  await outputFileSyncOnChange(SITE_MOBILE_ROUTES, source)
}

export async function buildPcSiteRoutes() {
  const [componentDocs, rootDocs] = await Promise.all([findComponentDocs(), findRootDocs()])

  const componentDocsRoutes = componentDocs.map(
    (componentDoc) => `
  {
    path: '${getComponentDocRoutePath(componentDoc)}',
    // @ts-ignore
    component: () => import('${componentDoc}')
  }\
`
  )

  const rootDocsRoutes = rootDocs.map(
    (rootDoc) => `
  {
    path: '${getRootDocRoutePath(rootDoc)}',
    // @ts-ignore
    component: () => import('${rootDoc}')
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
  getVarletConfig(true)
  await Promise.all([buildMobileSiteRoutes(), buildPcSiteRoutes(), buildSiteSource()])
}
