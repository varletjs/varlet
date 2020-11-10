'use strict'
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, '__esModule', { value: true })
exports.getUmdConfig = void 0
var webpack_merge_1 = __importDefault(require('webpack-merge'))
var path_1 = require('path')
var webpack_base_config_1 = require('./webpack.base.config')
var constant_1 = require('../shared/constant')
var varlet_config_1 = require('./varlet.config')
var fsUtils_1 = require('../shared/fsUtils')
var vue_loader_1 = require('vue-loader')
var mini_css_extract_plugin_1 = __importDefault(
	require('mini-css-extract-plugin')
)
function getUmdConfig() {
	var varletConfig = varlet_config_1.getVarletConfig()
	var namespace = fsUtils_1.accessProperty(varletConfig, 'namespace')
	return webpack_merge_1.default(webpack_base_config_1.createBaseConfig(), {
		mode: 'production',
		entry: path_1.resolve(constant_1.ES_DIR, 'index.js'),
		output: {
			path: constant_1.UMD_DIR,
			filename: namespace + '.js',
			library: '' + fsUtils_1.bigCamelize(namespace),
			libraryTarget: 'umd',
			umdNamedDefine: true,
		},
		externals: {
			vue: {
				root: 'Vue',
				commonjs: 'vue',
				commonjs2: 'vue',
				amd: 'vue',
			},
		},
		plugins: [
			new vue_loader_1.VueLoaderPlugin(),
			new mini_css_extract_plugin_1.default({
				filename: namespace + '.css',
			}),
		],
	})
}
exports.getUmdConfig = getUmdConfig
