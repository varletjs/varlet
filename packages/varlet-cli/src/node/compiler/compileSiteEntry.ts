import slash from 'slash'
import fse from 'fs-extra'
import {
  DOCS_DIR_NAME,
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

const ROOT_DOCS_RE = /\/docs\/([-\w]+)\.([-\w]+)(?:.draft)?\.md/
const PAGE_LOCALE_RE = /\/pages\/([-\w]+)\/locale\/([-\w]+)\.ts/
const EXAMPLE_INDEX_RE = /\/([-\w]+)\/example\/index(?:.draft)?\.vue/
const COMPONENT_DOCS_RE = /\/([-\w]+)\/docs\/([-\w]+)(?:.draft)?\.md/

export function getExampleRoutePath(examplePath: string): string {
  return '/' + examplePath.match(EXAMPLE_INDEX_RE)?.[1]
}

export function getComponentDocRoutePath(componentDocsPath: string): string {
  const [, routePath, language] = componentDocsPath.match(COMPONENT_DOCS_RE) ?? []

  return `/${language}/${routePath}`
}

export function getRootDocRoutePath(rootDocsPath: string): string {
  const [, routePath, language] = rootDocsPath.match(ROOT_DOCS_RE) ?? []

  return `/${language}/${routePath}`
}

export function getPageRoutePath(rootLocalePath: string): string {
  const [, routePath, language] = rootLocalePath.match(PAGE_LOCALE_RE) ?? []

  return `/${language}/${routePath}`
}

export function getPageFilePath(rootLocalePath: string): string {
  return rootLocalePath.replace(/locale\/.+/, 'index.vue')
}

export function isDraftExample(example: string) {
  return example.endsWith('index.draft.vue')
}

export function hasDraftExample(examples: string[], example: string) {
  return examples.includes(example.replace('index.vue', 'index.draft.vue'))
}

export function isDraftDoc(doc: string) {
  return doc.endsWith('.draft.md')
}

export function hasDraftDoc(docs: string[], doc: string) {
  return docs.includes(doc.replace('.md', '.draft.md'))
}

export async function findExamples(draftMode: boolean): Promise<string[]> {
  const [examples, draftExamples] = await Promise.all([
    glob(`${SRC_DIR}/**/${EXAMPLE_DIR_NAME}/index.vue`),
    glob(`${SRC_DIR}/**/${EXAMPLE_DIR_NAME}/index.draft.vue`),
  ])
  const mergedExamples = [...examples, ...draftExamples]

  return mergedExamples.filter((example) => {
    return draftMode ? isDraftExample(example) || !hasDraftExample(mergedExamples, example) : !isDraftExample(example)
  })
}

export function filterDraftDocs(docs: string[], draftMode: boolean) {
  return docs.filter((doc) => {
    return draftMode ? isDraftDoc(doc) || !hasDraftDoc(docs, doc) : !isDraftDoc(doc)
  })
}

export async function findComponentDocs(draftMode: boolean): Promise<string[]> {
  const componentDocs = await glob(`${SRC_DIR}/**/${DOCS_DIR_NAME}/*.md`)

  return filterDraftDocs(componentDocs, draftMode)
}

export async function findRootDocs(draftMode: boolean): Promise<string[]> {
  const rootDocs = await glob(`${ROOT_DOCS_DIR}/*.md`)

  return filterDraftDocs(rootDocs, draftMode)
}

export async function findPageLocales(): Promise<string[]> {
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
    const [, routePath, language] = locale.match(PAGE_LOCALE_RE) ?? []
    filterMap.set(routePath + language, slash(`${SITE_PC_DIR}/pages/${routePath}/locale/${language}.ts`))
  })

  userLocales.forEach((locale) => {
    const [, routePath, language] = locale.match(PAGE_LOCALE_RE) ?? []
    filterMap.set(routePath + language, locale)
  })

  return Promise.resolve(Array.from(filterMap.values()))
}

export async function buildMobileSiteRoutes(draftMode: boolean) {
  const examples: string[] = await findExamples(draftMode)
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

export async function buildPcSiteRoutes(draftMode: boolean) {
  const [componentDocs, rootDocs, rootLocales] = await Promise.all([
    findComponentDocs(draftMode),
    findRootDocs(draftMode),
    findPageLocales(),
  ])

  const pageRoutes = rootLocales.map(
    (locale) => `
  {
    path: '${getPageRoutePath(locale)}',
    // @ts-ignore
    component: () => import('${getPageFilePath(locale)}')
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
  ${pageRoutes.join(',')},
  ${layoutRoutes}
]`
  outputFileSyncOnChange(SITE_PC_ROUTES, source)
}

export async function buildSiteSource() {
  return copy(SITE, SITE_DIR)
}

export async function buildSiteEntry(draftMode: boolean) {
  await getVarletConfig(true)
  await Promise.all([buildMobileSiteRoutes(draftMode), buildPcSiteRoutes(draftMode), buildSiteSource()])
}
