import { resolve } from 'path'

export const CWD = process.cwd()
export const POSTCSS_CONFIG = resolve(CWD, 'postcss.config.js')
export const TS_CONFIG = resolve(CWD, 'tsconfig.json')
export const VARLET_CONFIG = resolve(CWD, 'varlet.config.js')
export const OUTPUT_SITE_PATH = resolve(CWD, 'site')
export const SRC_DIR = resolve(CWD, 'src')
export const ES_DIR = resolve(CWD, 'es')
export const CJS_DIR = resolve(CWD, 'cjs')
export const UMD_DIR = resolve(CWD, 'umd')
export const SITE_MOBILE_ROUTES = resolve(
	__dirname,
	'../../site/mobile/routes.ts'
)
export const SITE_PC_ROUTES = resolve(__dirname, '../../site/PC/routes.ts')
export const EXAMPLE_DIR_NAME = 'example'
export const DOCS_DIR_NAME = 'docs'
export const EXAMPLE_DIR_INDEX = 'index.vue'
export const TESTS_DIR_NAME = '__tests__'
export const EXTENSIONS = ['.vue', '.ts', '.js', '.less', '.css']
