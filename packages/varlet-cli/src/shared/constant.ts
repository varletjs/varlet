import { resolve } from 'path'

export const CWD = process.cwd()
export const POSTCSS_CONFIG = resolve(CWD, 'postcss.config.js')
export const TS_CONFIG = resolve(CWD, 'tsconfig.json')
export const VARLET_CONFIG = resolve(CWD, 'varlet.config.js')
export const OUTPUT_SITE_PATH = resolve(CWD, 'site')
export const SRC_DIR = resolve(CWD, 'src')
export const SITE_MOBILE_ROUTES = resolve(__dirname, '../../site/mobile/routes.ts')
export const EXAMPLE_DIR_NAME = 'example'
export const EXTENSIONS = ['.vue', '.ts', '.js', '.scss', '.less', '.css']
