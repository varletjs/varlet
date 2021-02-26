import slash from 'slash'
import {
  DOCS_DIR_NAME,
  EXAMPLE_DIR_INDEX,
  EXAMPLE_DIR_NAME,
  SITE_MOBILE_ROUTES,
  SITE_PC_ROUTES,
  SRC_DIR,
} from '../shared/constant'
import { pathExistsSync, readdir, readdirSync, writeFile } from 'fs-extra'
import { resolve } from 'path'
import { isDir } from '../shared/fsUtils'

interface I18MDPath {
  [key: string]: string[]
}

export function resolveMobileSiteRoutePath(exampleComponentPath: string): string {
  const componentName: string = exampleComponentPath
    .replace(`/${EXAMPLE_DIR_NAME}/index.vue`, '')
    .replace(/.*\//g, '')

  return `/${componentName}`
}

export function resolvePcSiteRoutePath(mdPath: string, componentName: string): string {
  const language = mdPath.split('/').slice(-1)[0].split('.')[0]
  return `/${language}/${componentName}`
}

export async function findExampleComponentPaths(): Promise<string[]> {
  const srcDir: string[] = await readdir(SRC_DIR)
  return srcDir
    .filter((filename: string) => pathExistsSync(resolve(SRC_DIR, filename, EXAMPLE_DIR_NAME, EXAMPLE_DIR_INDEX)))
    .map((validFilename: string) => slash(resolve(SRC_DIR, validFilename, EXAMPLE_DIR_NAME, EXAMPLE_DIR_INDEX)))
}

export async function findDocsMDPaths(): Promise<I18MDPath> {
  const srcDir: string[] = await readdir(SRC_DIR)
  return srcDir
    .filter((filename: string) => isDir(resolve(SRC_DIR, filename)))
    .reduce((i18MdPath: I18MDPath, componentName: string) => {
      const docsPath = resolve(SRC_DIR, componentName, DOCS_DIR_NAME)
      isDir(docsPath) &&
        (i18MdPath[componentName] = readdirSync(docsPath).map((filename: string) => slash(resolve(docsPath, filename))))
      return i18MdPath
    }, {})
}

export async function buildMobileSiteRoutes() {
  const exampleComponentPaths: string[] = await findExampleComponentPaths()
  const routes = exampleComponentPaths.map(
    (exampleComponentPath: string) => `
  {
    path: '${resolveMobileSiteRoutePath(exampleComponentPath)}',
    component: () => import('${exampleComponentPath}')
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
  const i18MdPath: I18MDPath = await findDocsMDPaths()

  const routes = Object.entries(i18MdPath).map(([componentName, mdPaths]) => {
    return mdPaths.map((mdPath) => {
      return `
  {
    path: '${resolvePcSiteRoutePath(mdPath, componentName)}',
    component: () => import('${mdPath}')
  }\
`
    })
  })

  await writeFile(
    SITE_PC_ROUTES,
    `export default [\
  ${routes.join(',')}
]`
  )
}
