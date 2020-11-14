import slash from 'slash'
import { parse, extname, resolve } from 'path'
import {
	lstatSync,
	pathExistsSync,
	readdir,
	writeFileSync,
	readdirSync,
} from 'fs-extra'
import {
	EXAMPLE_DIR_INDEX,
	EXAMPLE_DIR_NAME,
	SITE_MOBILE_ROUTES,
	SITE_PC_ROUTES,
	SRC_DIR,
	TESTS_DIR_NAME,
	DOCS_DIR_NAME,
} from './constant'
import { getVarletConfig } from '../config/varlet.config'

interface PathMap {
	[key: string]: string[]
}

export function accessProperty(target: any, operator: string) {
	const keys: string[] = operator.split('.')
	return keys.reduce((value: any, key: string) => {
		if (value === null || value === undefined) {
			return null
		}
		return value[key]
	}, target)
}

export function getDirComponentNames(dir: string[]) {
	return dir.filter((filename: string) => {
		return ![
			...accessProperty(getVarletConfig(), 'componentsIgnores'),
			'index.js',
		].includes(filename)
	})
}

export function isDir(path: string): boolean {
	return pathExistsSync(path) && lstatSync(path).isDirectory()
}

export function isSFC(path: string): boolean {
	return pathExistsSync(path) && extname(path) === '.vue'
}

export function isScript(path: string): boolean {
	return (
		(pathExistsSync(path) && extname(path) === '.js') || extname(path) === '.ts'
	)
}

export function isLess(path: string): boolean {
	return pathExistsSync(path) && extname(path) === '.less'
}

export function isExampleDir(path: string): boolean {
	return pathExistsSync(path) && parse(path).dir.endsWith(EXAMPLE_DIR_NAME)
}

export function isTestsDir(path: string): boolean {
	return pathExistsSync(path) && parse(path).dir.endsWith(TESTS_DIR_NAME)
}

export function replaceExt(path: string, ext: string): string {
	return path.replace(extname(path), ext)
}

export function convertMobileSiteExamplePathToComponentName(
	path: string
): string {
	return path.replace(`/${EXAMPLE_DIR_NAME}/index.vue`, '').replace(/.*\//g, '')
}

export function getRouterPathByPcSiteDocsPath(
	path: string,
	componentName: string
): string {
	const language = path.split('/').slice(-1)[0].split('.')[0]
	return `/${language}/${componentName}`
}

export async function getMobileSiteExamplePaths(): Promise<string[]> {
	const varletConfig = getVarletConfig()
	const srcDir: string[] = await readdir(SRC_DIR)
	return srcDir
		.filter(
			(filename) =>
				!accessProperty(varletConfig, 'siteIgnores').includes(filename)
		)
		.filter((filename) => isDir(resolve(SRC_DIR, filename)))
		.map((filename) => resolve(SRC_DIR, filename))
		.filter((path) => isDir(resolve(path, EXAMPLE_DIR_NAME)))
		.map((path) => resolve(path, EXAMPLE_DIR_NAME))
		.filter((path) => pathExistsSync(resolve(path, EXAMPLE_DIR_INDEX)))
		.map((path) => slash(resolve(path, EXAMPLE_DIR_INDEX)))
}

export function getPcSiteDocsPaths(): PathMap {
	const varletConfig = getVarletConfig()
	const srcDir: string[] = readdirSync(SRC_DIR)
	return srcDir
		.filter(
			(filename) =>
				!accessProperty(varletConfig, 'siteIgnores').includes(filename)
		)
		.filter((filename) => isDir(resolve(SRC_DIR, filename)))
		.reduce((pathMap: PathMap, dirName: string) => {
			const path = slash(resolve(SRC_DIR, dirName, DOCS_DIR_NAME))
			if (isDir(path))
				pathMap[dirName] = readdirSync(path).map((filename) =>
					resolve(path, filename)
				)
			return pathMap
		}, {})
}

export function getRoutes(pathsMap: PathMap) {
	return Object.entries(pathsMap).map((pathArray) => {
		return pathArray[1].map((path) => {
			return `
  {
    path: '${getRouterPathByPcSiteDocsPath(path, pathArray[0])}',
    component: () => import('${path}')
  }\
`
		})
	})
}

export async function buildMobileSiteRoutes() {
	if (!pathExistsSync(SRC_DIR)) {
		writeFileSync(SITE_MOBILE_ROUTES, 'export default []')
		return
	}

	const paths = await getMobileSiteExamplePaths()
	const routes = paths!.map(
		(path) => `
  {
    path: '/${convertMobileSiteExamplePathToComponentName(path)}',
    component: () => import('${path}')
  }\
`
	)

	writeFileSync(
		SITE_MOBILE_ROUTES,
		`export default [\
  ${routes.join(',')}
]`
	)
}

export function buildPcSiteRoutes() {
	if (!pathExistsSync(SRC_DIR)) {
		writeFileSync(SITE_PC_ROUTES, 'export default []')
		return
	}

	const pathsMap = getPcSiteDocsPaths()
	const routes = getRoutes(pathsMap)
	writeFileSync(
		SITE_PC_ROUTES,
		`export default [\
  ${routes.join(',')}
]`
	)
}

export function bigCamelize(str: string): string {
	return camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase())
}

export function camelize(str: string): string {
	return str.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())
}
