'use strict'
var __spreadArrays =
	(this && this.__spreadArrays) ||
	function () {
		for (var s = 0, i = 0, il = arguments.length; i < il; i++)
			s += arguments[i].length
		for (var r = Array(s), k = 0, i = 0; i < il; i++)
			for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
				r[k] = a[j]
		return r
	}
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, '__esModule', { value: true })
exports.getBuildConfig = void 0
var webpack_merge_1 = __importDefault(require('webpack-merge'))
var webpackbar_1 = __importDefault(require('webpackbar'))
var mini_css_extract_plugin_1 = __importDefault(
	require('mini-css-extract-plugin')
)
var webpack_base_config_1 = require('./webpack.base.config')
var constant_1 = require('../shared/constant')
var clean_webpack_plugin_1 = require('clean-webpack-plugin')
function getBuildConfig() {
	return webpack_merge_1.default(webpack_base_config_1.createBaseConfig(), {
		mode: 'production',
		output: {
			publicPath: './',
			path: constant_1.OUTPUT_SITE_PATH,
			filename: '[name].[hash:8].js',
			chunkFilename: 'js/[name].[chunkhash:8].js',
		},
		plugins: __spreadArrays(
			[
				new webpackbar_1.default({
					name: 'Site production building',
					color: '#15DD6A',
				}),
				new mini_css_extract_plugin_1.default({
					filename: 'css/[name].[hash:8].css',
					chunkFilename: 'css/[id].[chunkhash:8].css',
				}),
				new clean_webpack_plugin_1.CleanWebpackPlugin(),
			],
			webpack_base_config_1.createBasePlugins()
		),
	})
}
exports.getBuildConfig = getBuildConfig
