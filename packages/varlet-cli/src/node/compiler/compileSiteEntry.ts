import slash from 'slash'
import fse from 'fs-extra'
import {
  DOCS_DIR_NAME,
  DIR_INDEX,
  EXAMPLE_DIR_NAME,
  LOCALE_DIR_NAME,
  ROOT_DOCS_DIR,
  ROOT_PAGES_DIR,
  SITE,
  SITE_DIR,
  SITE_MOBILE_ROUTES,
  SITE_PC_DIR,
  SITE_PC_ROUTES,
  SRC_DIR,
} from '../shared/constant.js'
import { glob, isDir, outputFileSyncOnChange } from '../shared/fsUtils.js'
import { getVarletConfig } from '../config/varlet.config.js'
import { get } from 'lodash-es'

const { copy } = fse

const EXAMPLE_COMPONENT_NAME_RE = /\/([-\w]+)\/example\/index.vue/
const COMPONENT_DOCS_RE = /\/([-\w]+)\/docs\/([-\w]+)\.md/
const ROOT_DOCS_RE = /\/docs\/([-\w]+)\.([-\w]+)\.md/
const ROOT_LOCALE_RE = /\/pages\/([-\w]+)\/locale\/([-\w]+)\.ts/

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

export function getRootRoutePath(rootLocalePath: string): string {
  const [, routePath, language] = rootLocalePath.match(ROOT_LOCALE_RE) ?? []

  return `/${language}/${routePath}`
}

export function getRootFilePath(rootLocalePath: string): string {
  return rootLocalePath.replace(/locale\/.+/, DIR_INDEX)
}

export function findExamples(): Promise<string[]> {
  return glob(`${SRC_DIR}/**/${EXAMPLE_DIR_NAME}/${DIR_INDEX}`)
}

export function findComponentDocs(): Promise<string[]> {
  return glob(`${SRC_DIR}/**/${DOCS_DIR_NAME}/*.md`)
}

export function findRootDocs(): Promise<string[]> {
  return glob(`${ROOT_DOCS_DIR}/*.md`)
}

export async function findRootLocales(): Promise<string[]> {
  const defaultLanguage = get(await getVarletConfig(), 'defaultLanguage')

  const userPages = await glob(`${ROOT_PAGES_DIR}/*`)
  const baseLocales = await glob(`${SITE}/pc/pages/**/${LOCALE_DIR_NAME}/*.ts`)

  const userLocales = await userPages.reduce<Promise<string[]>>(
    async (userLocales: Promise<string[]>, page: string) => {
      if (isDir(page)) {
        const locales = await glob(`${page}/${LOCALE_DIR_NAME}/*.ts`)

        if (!locales.length) locales.push(`${page}/${LOCALE_DIR_NAME}/${defaultLanguage}.ts`)
        ;(await userLocales).push(...locales)
      }

      return userLocales
    },
    Promise.resolve([])
  )

  // filter
  const filterMap = new Map()
  baseLocales.forEach((locale) => {
    const [, routePath, language] = locale.match(ROOT_LOCALE_RE) ?? []
    filterMap.set(routePath + language, slash(`${SITE_PC_DIR}/pages/${routePath}/locale/${language}.ts`))
  })

  userLocales.forEach((locale) => {
    const [, routePath, language] = locale.match(ROOT_LOCALE_RE) ?? []
    filterMap.set(routePath + language, locale)
  })

  return Promise.resolve(Array.from(filterMap.values()))
}

export async function buildMobileSiteRoutes() {
  const examples: string[] = await findExamples()

  const routes = examples.map(
    (example) => `
  {
    path: '${getExampleRoutePath(example)}',
    // @ts-ignore
    component: () => import('${example}')
  }`
  )

  const source = `export default [\
    ${routes.join(',')}
]`

  await outputFileSyncOnChange(SITE_MOBILE_ROUTES, source)
}

export async function buildPcSiteRoutes() {
  const [componentDocs, rootDocs, rootLocales] = await Promise.all([
    findComponentDocs(),
    findRootDocs(),
    findRootLocales(),
  ])

  const rootPagesRoutes = rootLocales.map(
    (rootLocale) => `
  {
    path: '${getRootRoutePath(rootLocale)}',
    // @ts-ignore
    component: () => import('${getRootFilePath(rootLocale)}')
  }\
`
  )

  const componentDocsRoutes = componentDocs.map(
    (componentDoc) => `
      {
        path: '${getComponentDocRoutePath(componentDoc)}',
        // @ts-ignore
        component: () => import('${componentDoc}')
      }`
  )

  const rootDocsRoutes = rootDocs.map(
    (rootDoc) => `
      {
        path: '${getRootDocRoutePath(rootDoc)}',
        // @ts-ignore
        component: () => import('${rootDoc}')
      }`
  )

  const layoutRoutes = `{
    path: '/layout',
    // @ts-ignore
    component:()=> import('${slash(SITE_PC_DIR)}/Layout.vue'),
    children: [
      ${[...componentDocsRoutes, rootDocsRoutes].join(',')},
    ]
  }`

  const source = `export default [\
  ${rootPagesRoutes.join(',')},
  ${layoutRoutes}
]`
  outputFileSyncOnChange(SITE_PC_ROUTES, source)
}

export async function buildSiteSource() {
  return copy(SITE, SITE_DIR)
}

export async function buildSiteEntry() {
  await getVarletConfig(true)
  await Promise.all([buildMobileSiteRoutes(), buildPcSiteRoutes(), buildSiteSource()])
}
