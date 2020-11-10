'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.EXTENSIONS = exports.TESTS_DIR_NAME = exports.EXAMPLE_DIR_INDEX = exports.EXAMPLE_DIR_NAME = exports.SITE_MOBILE_ROUTES = exports.UMD_DIR = exports.CJS_DIR = exports.ES_DIR = exports.SRC_DIR = exports.OUTPUT_SITE_PATH = exports.VARLET_CONFIG = exports.TS_CONFIG = exports.POSTCSS_CONFIG = exports.CWD = void 0
var path_1 = require('path')
exports.CWD = process.cwd()
exports.POSTCSS_CONFIG = path_1.resolve(exports.CWD, 'postcss.config.js')
exports.TS_CONFIG = path_1.resolve(exports.CWD, 'tsconfig.json')
exports.VARLET_CONFIG = path_1.resolve(exports.CWD, 'varlet.config.js')
exports.OUTPUT_SITE_PATH = path_1.resolve(exports.CWD, 'site')
exports.SRC_DIR = path_1.resolve(exports.CWD, 'src')
exports.ES_DIR = path_1.resolve(exports.CWD, 'es')
exports.CJS_DIR = path_1.resolve(exports.CWD, 'cjs')
exports.UMD_DIR = path_1.resolve(exports.CWD, 'umd')
exports.SITE_MOBILE_ROUTES = path_1.resolve(
	__dirname,
	'../../site/mobile/routes.ts'
)
exports.EXAMPLE_DIR_NAME = 'example'
exports.EXAMPLE_DIR_INDEX = 'index.vue'
exports.TESTS_DIR_NAME = '__tests__'
exports.EXTENSIONS = ['.vue', '.ts', '.js', '.less', '.css']
