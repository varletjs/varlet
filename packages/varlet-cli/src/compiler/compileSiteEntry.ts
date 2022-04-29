import {
  DOCS_DIR_NAME,
  EXAMPLE_DIR_INDEX,
  EXAMPLE_DIR_NAME,
  ROOT_DOCS_DIR,
  ROOT_PAGES_DIR,
  SITE,
  SITE_DIR,
  SITE_MOBILE_ROUTES,
  SITE_PC_DIR,
  SITE_PC_ROUTES,
  SRC_DIR,
} from '../shared/constant'
import { copy } from 'fs-extra'
import { glob, outputFileSyncOnChange } from '../shared/fsUtils'
import { getVarletConfig } from '../config/varlet.config'

const EXAMPLE_COMPONENT_NAME_RE = /\/([-\w]+)\/example\/index.vue/
const COMPONENT_DOCS_RE = /\/([-\w]+)\/docs\/([-\w]+)\.md/
const ROOT_DOCS_RE = /\/docs\/([-\w]+)\.([-\w]+)\.md/
const ROOT_PAGE_RE = /\/pages\/([-\w]+)\.([-\w]+)\.vue/

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

export function getRootPagesPath(rootPagePath: string): string {
  const [, routePath, language] = rootPagePath.match(ROOT_PAGE_RE) ?? []
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

export async function findRootPages(): Promise<string[]> {
  // the user pages
  const userPages = await glob(`${ROOT_PAGES_DIR}/*.vue`)
  // authority pattern
  const authorityPage = await glob(`${SITE}/pc/pages/*.vue`)

  // filter
  const rootPages: string[] = []
  const filterPage = new Map()
  userPages.forEach((page) => {
    const [, routePath, language] = page.match(ROOT_PAGE_RE) ?? []
    filterPage.set(routePath + language, true)
  })
  authorityPage.forEach((page) => {
    const [, routePath, language] = page.match(ROOT_PAGE_RE) ?? []
    if (!filterPage.has(routePath + language)) {
      filterPage.set(routePath + language, true)
      rootPages.push(`${SITE_PC_DIR}/pages/${routePath}.${language}.vue`)
    }
  })

  return Promise.resolve(rootPages)
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
  const [componentDocs, rootDocs, rootPages] = await Promise.all([findComponentDocs(), findRootDocs(), findRootPages()])

  const rootPagesRoutes = rootPages.map(
    (rootPage) => `
      {
        path: '${getRootPagesPath(rootPage)}',
        // @ts-ignore
        component: () => import('${rootPage}')
      }\
    `
  )

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

  const layoutRoutes = `
    {
      path: '/layout',
      // @ts-ignore
      component:()=> import('${SITE_PC_DIR}/Layout.vue'),
      children: [
        ${[...componentDocsRoutes, rootDocsRoutes].join(',')}, 
      ]
    }\
  `
  const source = `export default [\
    ${rootPagesRoutes.join(',')},
    \
    ${layoutRoutes}
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
