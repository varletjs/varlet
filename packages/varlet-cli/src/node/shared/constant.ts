import { resolve } from 'path'
import { getDirname } from './fsUtils.js'

export const dirname = getDirname(import.meta.url)

export const CWD = process.cwd()
export const VARLET_CONFIG = resolve(CWD, 'varlet.config.mjs')
export const VITEST_CONFIG = resolve(dirname, '../config/vitest.config.js')
export const SRC = 'src'
export const SRC_DIR = resolve(CWD, SRC)
export const ES_DIR = resolve(CWD, 'es')
export const LIB_DIR = resolve(CWD, 'lib')
export const UMD_DIR = resolve(CWD, 'umd')
export const TYPES_DIR = resolve(CWD, 'types')
export const ROOT_DOCS_DIR = resolve(CWD, 'docs')
export const ROOT_PAGES_DIR = resolve(CWD, 'pages')

export const VITE_RESOLVE_EXTENSIONS = ['.vue', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.cjs', '.less', '.scss', '.css']
export const SCRIPTS_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.cjs']
export const PUBLIC_DIR_INDEXES = ['index.vue', 'index.tsx', 'index.ts', 'index.jsx', 'index.js']
export const STYLE_DIR_NAME = 'style'
export const EXAMPLE_DIR_NAME = 'example'
export const LOCALE_DIR_NAME = 'locale'
export const DOCS_DIR_NAME = 'docs'
export const TESTS_DIR_NAME = '__tests__'
export const GENERATORS_DIR = resolve(dirname, '../../../template/generators')
export const UI_PACKAGE_JSON = resolve(CWD, 'package.json')
export const CLI_PACKAGE_JSON = resolve(dirname, '../../../package.json')
export const CHECKLIST_FILE = resolve(CWD, 'CHECKLIST.md')

// site
export const SITE = resolve(dirname, '../../../site')
export const SITE_OUTPUT_PATH = resolve(CWD, 'site')
export const SITE_PUBLIC_PATH = resolve(CWD, 'public')
export const SITE_DIR = resolve(CWD, '.varlet/site')
export const SITE_PC_DIR = resolve(CWD, '.varlet/site/pc')
export const SITE_PC_ROUTES = resolve(CWD, '.varlet/pc.routes.ts')
export const SITE_MOBILE_ROUTES = resolve(CWD, '.varlet/mobile.routes.ts')
export const SITE_CONFIG = resolve(CWD, '.varlet/site.config.json')

// template highlight
export const HL_DIR = resolve(CWD, 'highlight')
export const HL_COMPONENT_NAME_RE = /.*(\/|\\)(.+)(\/|\\)docs(\/|\\)/
export const HL_API_RE = /##\s*API(?:\r\n|\n)+/

export const HL_EN_TITLE_ATTRIBUTES_RE = /###\s*Props(?:\r\n|\n)+/
export const HL_EN_TITLE_EVENTS_RE = /###\s*Events(?:\r\n|\n)+/
export const HL_EN_TITLE_SLOTS_RE = /###\s*Slots(?:\r\n|\n)+/
export const HL_EN_MD = 'en-US.md'
export const HL_EN_WEB_TYPES_JSON = resolve(HL_DIR, 'web-types.en-US.json')

export const HL_ZH_TITLE_ATTRIBUTES_RE = /###\s*属性(?:\r\n|\n)+/
export const HL_ZH_TITLE_EVENTS_RE = /###\s*事件(?:\r\n|\n)+/
export const HL_ZH_TITLE_SLOTS_RE = /###\s*插槽(?:\r\n|\n)+/
export const HL_ZH_MD = 'zh-CN.md'
export const HL_ZH_WEB_TYPES_JSON = resolve(HL_DIR, 'web-types.zh-CN.json')

// icons
export const ICONS_PNG_DIR_NAME = 'png'

// extension
export const EXTENSION_ENTRY = resolve(CWD, 'src/extension.ts')
