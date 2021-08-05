import { resolve } from 'path'

export const CWD = process.cwd()
export const POSTCSS_CONFIG = resolve(CWD, 'postcss.config.js')
export const TS_CONFIG = resolve(CWD, 'tsconfig.json')
export const VARLET_CONFIG = resolve(CWD, 'varlet.config.js')
export const SRC_DIR = resolve(CWD, 'src')
export const ES_DIR = resolve(CWD, 'es')
export const UMD_DIR = resolve(CWD, 'umd')
export const TYPES_DIR = resolve(CWD, 'types')
export const ROOT_DOCS_DIR = resolve(CWD, 'docs')
export const ESLINT_EXTENSIONS = ['.vue', '.ts', '.js', '.mjs']
export const WEBPACK_RESOLVE_EXTENSIONS = ['.js', '.jsx', '.vue', '.ts', '.tsx', '.css', '.less']
export const SCRIPTS_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js']
export const PUBLIC_DIR_INDEXES = ['index.vue', 'index.tsx', 'index.ts', 'index.jsx', 'index.js']
export const STYLE_DIR_NAME = 'style'
export const EXAMPLE_DIR_NAME = 'example'
export const DOCS_DIR_NAME = 'docs'
export const EXAMPLE_DIR_INDEX = 'index.vue'
export const TESTS_DIR_NAME = '__tests__'
export const PRIMARY_COLOR = '#3a7afe'

// site
export const SITE_MOBILE_MAIN = resolve(__dirname, '../../site/mobile/main.ts')
export const SITE_PC_MAIN = resolve(__dirname, '../../site/pc/main.ts')
export const SITE = resolve(__dirname, '../../site')
export const SITE_OUTPUT_PATH = resolve(CWD, 'site')
export const SITE_PUBLIC_PATH = resolve(CWD, 'public')
export const SITE_PC_ROUTES = resolve(CWD, '.varlet/pc.routes.ts')
export const SITE_MOBILE_ROUTES = resolve(CWD, '.varlet/mobile.routes.ts')
export const SITE_CONFIG = resolve(CWD, '.varlet/site.config.json')
export const SITE_DOCS_GLOB = resolve(CWD, './docs/**')
export const SITE_EXAMPLE_GLOB = resolve(CWD, './src/**/example/**')

// template highlight
export const HL_COMPONENT_NAME_RE = /.*(\/|\\)(.+)(\/|\\)docs(\/|\\)/
export const HL_API_RE = /##\s*API\n+/
export const HL_TITLE_ATTRIBUTES_RE = /###\s*属性\s*\n+/
export const HL_TITLE_EVENTS_RE = /###\s*事件\s*\n+/
export const HL_TITLE_SLOTS_RE = /###\s*插槽\s*\n+/
export const HL_MD = 'zh-CN.md'
export const HL_DIR = resolve(CWD, 'highlight')
export const HL_TAGS_JSON = resolve(HL_DIR, 'tags.json')
export const HL_ATTRIBUTES_JSON = resolve(HL_DIR, 'attributes.json')
export const HL_WEB_TYPES_JSON = resolve(HL_DIR, 'web-types.json')

// jest
export const JEST_CONFIG = resolve(__dirname, '../config/jest.config.js')
export const JEST_MEDIA_MOCK = resolve(__dirname, '../config/jest.media.mock.js')
export const JEST_STYLE_MOCK = resolve(__dirname, '../config/jest.style.mock.js')
